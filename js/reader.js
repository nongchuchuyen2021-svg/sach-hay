/**
 * TỦ SÁCH HAY - Unified Book Reader Controller
 * Reads books dynamically from window.BOOKS_DATABASE[bookId]
 */

(function () {
  'use strict';

  // 1. Identify Book to Read
  const urlParams = new URLSearchParams(window.location.search);
  const requestedBookId = urlParams.get('book') || 'tri-tue-khong-tu';

  const db = window.BOOKS_DATABASE || {};
  let currentBook = db[requestedBookId];

  // Fallback to tri-tue-khong-tu or first available
  if (!currentBook) {
    const keys = Object.keys(db);
    if (keys.length > 0) {
      currentBook = db[keys[0]];
    }
  }

  if (!currentBook || !currentBook.chapters || currentBook.chapters.length === 0) {
    document.body.innerHTML = `
      <div style="max-width: 600px; margin: 80px auto; text-align: center; padding: 20px; font-family: sans-serif;">
        <h2>Không tìm thấy nội dung cuốn sách!</h2>
        <p>Cuốn sách với mã <code>${requestedBookId}</code> chưa sẵn sàng hoặc đang được cập nhật.</p>
        <p><a href="index.html" style="color: #9e2a2b; font-weight: bold;">⬅ Quay lại Kệ Sách Hay</a></p>
      </div>
    `;
    return;
  }

  const chapters = currentBook.chapters;

  // 2. Preferences & Storage
  const STORAGE_KEY_PREFS = 'khong_tu_reader_prefs_v1';
  const STORAGE_KEY_PROGRESS = `sach_hay_${currentBook.id}_last_chap`;

  const defaultPrefs = {
    theme: 'sepia', // 'sepia' | 'dark' | 'sage' | 'light'
    fontSize: 19,
    fontFamily: 'serif',
    spacing: 'normal',
    width: 'normal'
  };

  let prefs = { ...defaultPrefs };
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PREFS);
    if (saved) {
      prefs = { ...defaultPrefs, ...JSON.parse(saved) };
    }
  } catch (e) {}

  // Determine starting chapter: URL hash, then localStorage, else 0
  let currentChapterIndex = 0;
  if (window.location.hash) {
    const hashId = window.location.hash.replace('#', '');
    const foundIdx = chapters.findIndex(c => c.id === hashId);
    if (foundIdx !== -1) currentChapterIndex = foundIdx;
  } else {
    try {
      const savedIdx = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (savedIdx !== null) {
        const parsed = parseInt(savedIdx, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < chapters.length) {
          currentChapterIndex = parsed;
        }
      }
    } catch (e) {}
  }

  let activePartFilter = 'all';
  let searchTerm = '';

  // 3. DOM Elements
  const docHtml = document.documentElement;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const progressBar = document.getElementById('progress-bar');

  // Header Elements
  const headerBookTitle = document.getElementById('header-book-title');
  const headerChapterName = document.getElementById('header-chapter-name');
  const btnToggleToc = document.getElementById('btn-toggle-toc');
  const btnCloseToc = document.getElementById('btn-close-toc');
  const sidebarToc = document.getElementById('sidebar-toc');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const btnSearchToggle = document.getElementById('btn-search-toggle');
  const btnQuickTheme = document.getElementById('btn-quick-theme');
  const btnSettingsToggle = document.getElementById('btn-settings-toggle');

  // Sidebar Elements
  const sidebarSealIcon = document.getElementById('sidebar-seal-icon');
  const sidebarBookTitle = document.getElementById('sidebar-book-title');
  const sidebarBookMeta = document.getElementById('sidebar-book-meta');
  const tocSearchInput = document.getElementById('toc-search-input');
  const btnClearSearch = document.getElementById('btn-clear-search');
  const partFiltersContainer = document.getElementById('part-filters-container');
  const tocListContainer = document.getElementById('toc-list-container');

  // Reader Content
  const readingContent = document.getElementById('reading-content');
  const btnPrevChapter = document.getElementById('btn-prev-chapter');
  const btnNextChapter = document.getElementById('btn-next-chapter');
  const prevChapterTitle = document.getElementById('prev-chapter-title');
  const nextChapterTitle = document.getElementById('next-chapter-title');

  // Dock Elements
  const dockBtnPrev = document.getElementById('dock-btn-prev');
  const dockBtnNext = document.getElementById('dock-btn-next');
  const dockChapterIndicator = document.getElementById('dock-chapter-indicator');
  const dockChapterNum = document.getElementById('dock-chapter-num');
  const dockProgressPercent = document.getElementById('dock-progress-percent');
  const btnScrollTop = document.getElementById('btn-scroll-top');

  // Settings Elements
  const settingsPanel = document.getElementById('settings-panel');
  const btnCloseSettings = document.getElementById('btn-close-settings');
  const fontSizeDisplay = document.getElementById('font-size-display');
  const sizeSlider = document.getElementById('size-slider');
  const btnSizeDec = document.getElementById('btn-size-dec');
  const btnSizeInc = document.getElementById('btn-size-inc');

  // Footer Elements
  const footerSealName = document.getElementById('footer-seal-name');
  const footerBookDetails = document.getElementById('footer-book-details');

  // 4. Initialize Book Metadata in UI
  document.title = `${currentBook.title} - Tủ Sách Hay`;
  if (headerBookTitle) headerBookTitle.textContent = currentBook.title.toUpperCase();
  if (sidebarBookTitle) sidebarBookTitle.textContent = currentBook.title;
  if (sidebarBookMeta) sidebarBookMeta.textContent = `${chapters.length} chương & điển tích`;
  if (sidebarSealIcon && currentBook.coverBadge) sidebarSealIcon.textContent = currentBook.coverBadge;
  if (footerSealName) footerSealName.textContent = currentBook.title;
  if (footerBookDetails) footerBookDetails.innerHTML = `Tác phẩm: <strong>${escapeHtml(currentBook.title)}</strong> &bull; ${escapeHtml(currentBook.author)}`;

  // 5. Apply Preferences
  function applyPrefs() {
    docHtml.setAttribute('data-theme', prefs.theme);
    docHtml.setAttribute('data-font', prefs.fontFamily);
    docHtml.setAttribute('data-spacing', prefs.spacing);
    docHtml.setAttribute('data-width', prefs.width);
    docHtml.style.setProperty('--reading-font-size', `${prefs.fontSize}px`);

    const themeColors = {
      sepia: '#f5eedf',
      dark: '#121418',
      sage: '#131c18',
      light: '#fbf9f5'
    };
    if (themeMeta) {
      themeMeta.setAttribute('content', themeColors[prefs.theme] || '#f5eedf');
    }

    if (fontSizeDisplay) fontSizeDisplay.textContent = `${prefs.fontSize} px`;
    if (sizeSlider) sizeSlider.value = prefs.fontSize;

    document.querySelectorAll('[data-set-theme]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-set-theme') === prefs.theme);
    });

    document.querySelectorAll('[data-set-font]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-set-font') === prefs.fontFamily);
    });

    document.querySelectorAll('[data-set-spacing]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-set-spacing') === prefs.spacing);
    });

    document.querySelectorAll('[data-set-width]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-set-width') === prefs.width);
    });

    try {
      localStorage.setItem(STORAGE_KEY_PREFS, JSON.stringify(prefs));
    } catch (e) {}
  }

  // 6. Render Chapter
  function renderChapter(index, shouldScrollToTop = true) {
    if (index < 0 || index >= chapters.length) return;

    currentChapterIndex = index;
    const chap = chapters[index];

    // Save reading progress (both generic & book-specific)
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, index.toString());
      localStorage.setItem('khong_tu_reader_last_chap', index.toString());
      history.replaceState(null, '', `#${chap.id}`);
    } catch (e) {}

    // Update Header & Dock
    headerChapterName.textContent = chap.title;
    dockChapterNum.textContent = `Chương ${index + 1} / ${chapters.length}`;

    const overallPercent = Math.round(((index + 1) / chapters.length) * 100);
    dockProgressPercent.textContent = `${overallPercent}%`;

    // Build Content HTML
    let html = `
      <header class="chapter-header">
        <div class="part-tag">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <span>${chap.part}</span>
        </div>
        <h1 class="chapter-title">${chap.title}</h1>
        ${chap.subtitle ? `<h2 class="chapter-subtitle">${chap.subtitle}</h2>` : ''}
        <div class="chapter-meta">
          <span class="chapter-meta-item">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${chap.read_time}
          </span>
          <span class="chapter-meta-item">&bull;</span>
          <span class="chapter-meta-item">${chap.word_count} chữ</span>
          <span class="chapter-meta-item">&bull;</span>
          <span class="chapter-meta-item">Thiên thứ ${index + 1}</span>
        </div>
      </header>
    `;

    let hasDropCapApplied = false;

    chap.paragraphs.forEach((pObj) => {
      const type = pObj.type;
      const content = pObj.content;

      if (type === 'quote') {
        const quoteMatch = content.match(/^(.*?)(-\s*["“].*?["”].*?)$/s);
        if (quoteMatch) {
          html += `
            <div class="quote-box">
              <p>${escapeHtml(quoteMatch[1].trim())}</p>
              <span class="quote-source">${escapeHtml(quoteMatch[2].trim())}</span>
            </div>
          `;
        } else {
          html += `
            <div class="quote-box">
              <p>${escapeHtml(content)}</p>
            </div>
          `;
        }
      } else if (type === 'commentary') {
        html += `
          <div class="commentary-box">
            <div class="commentary-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Lời bình & Đúc kết triết lý</span>
            </div>
            <p>${escapeHtml(content)}</p>
          </div>
        `;
      } else {
        const firstClass = !hasDropCapApplied ? 'first-paragraph' : '';
        if (!hasDropCapApplied) hasDropCapApplied = true;
        html += `<p class="${firstClass}">${escapeHtml(content)}</p>`;
      }
    });

    readingContent.innerHTML = html;

    // Bottom Navigation Buttons
    const hasPrev = index > 0;
    const hasNext = index < chapters.length - 1;

    btnPrevChapter.disabled = !hasPrev;
    dockBtnPrev.disabled = !hasPrev;
    prevChapterTitle.textContent = hasPrev ? chapters[index - 1].title : 'Đầu sách';

    btnNextChapter.disabled = !hasNext;
    dockBtnNext.disabled = !hasNext;
    nextChapterTitle.textContent = hasNext ? chapters[index + 1].title : 'Hết sách';

    updateActiveTocItem(index);

    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // 7. Table of Contents & Part Filters
  function getUniqueParts() {
    const parts = [];
    chapters.forEach(c => {
      if (!parts.includes(c.part)) parts.push(c.part);
    });
    return parts;
  }

  function renderPartFilters() {
    const parts = getUniqueParts();
    let filterHtml = `
      <button class="filter-chip ${activePartFilter === 'all' ? 'active' : ''}" data-part="all">Tất cả (${chapters.length})</button>
    `;
    parts.forEach(p => {
      const count = chapters.filter(c => c.part === p).length;
      const shortName = p.replace('KHỔNG TỬ BÌNH SINH', 'Cuộc đời')
                         .replace('ĐẠO LÝ VỀ AN MỆNH', 'An mệnh')
                         .replace('ĐẠO LÝ GIÚP ĐỜI', 'Giúp đời')
                         .replace('ĐẠO LÝ LÀM CHÍNH TRỊ', 'Chính trị')
                         .replace('ĐẠO TRỊ HỌC', 'Trị học')
                         .replace('GIAO DU CHI ĐẠO', 'Giao du')
                         .replace('HẬU KÝ (LỜI KẾT)', 'Hậu ký');
      filterHtml += `
        <button class="filter-chip ${activePartFilter === p ? 'active' : ''}" data-part="${escapeHtml(p)}" title="${escapeHtml(p)}">
          ${escapeHtml(shortName)} (${count})
        </button>
      `;
    });
    partFiltersContainer.innerHTML = filterHtml;

    partFiltersContainer.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        activePartFilter = chip.getAttribute('data-part');
        renderPartFilters();
        renderTocList();
      });
    });
  }

  function renderTocList() {
    let filtered = chapters;

    if (activePartFilter !== 'all') {
      filtered = filtered.filter(c => c.part === activePartFilter);
    }

    if (searchTerm.trim()) {
      const q = removeDiacritics(searchTerm.toLowerCase().trim());
      filtered = filtered.filter(c => {
        const titleMatch = removeDiacritics(c.title.toLowerCase()).includes(q);
        const subtitleMatch = c.subtitle && removeDiacritics(c.subtitle.toLowerCase()).includes(q);
        const partMatch = removeDiacritics(c.part.toLowerCase()).includes(q);
        return titleMatch || subtitleMatch || partMatch;
      });
    }

    if (filtered.length === 0) {
      tocListContainer.innerHTML = `
        <div style="padding: 30px 16px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Không tìm thấy câu chuyện nào phù hợp với từ khóa "${escapeHtml(searchTerm)}".
        </div>
      `;
      return;
    }

    let tocHtml = '';
    filtered.forEach(c => {
      const realIndex = chapters.indexOf(c);
      const isActive = realIndex === currentChapterIndex;
      tocHtml += `
        <div class="toc-item ${isActive ? 'active' : ''}" data-chapter-index="${realIndex}">
          <span class="toc-num">${realIndex + 1}</span>
          <div class="toc-info">
            <div class="toc-title">${escapeHtml(c.title)}</div>
            <div class="toc-meta">
              <span>${escapeHtml(c.part)}</span>
              <span>&bull;</span>
              <span>${c.read_time}</span>
            </div>
          </div>
        </div>
      `;
    });

    tocListContainer.innerHTML = tocHtml;

    tocListContainer.querySelectorAll('.toc-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-chapter-index'), 10);
        renderChapter(idx);
        closeSidebar();
      });
    });
  }

  function updateActiveTocItem(index) {
    const items = tocListContainer.querySelectorAll('.toc-item');
    items.forEach(el => {
      const elIdx = parseInt(el.getAttribute('data-chapter-index'), 10);
      el.classList.toggle('active', elIdx === index);
    });

    const activeItem = tocListContainer.querySelector('.toc-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  // 8. Drawer & Modal Controls
  function openSidebar() {
    sidebarToc.classList.add('open');
    drawerOverlay.classList.add('active');
    closeSettings();
    updateActiveTocItem(currentChapterIndex);
  }

  function closeSidebar() {
    sidebarToc.classList.remove('open');
    if (!settingsPanel.classList.contains('open')) {
      drawerOverlay.classList.remove('active');
    }
  }

  function openSettings() {
    settingsPanel.classList.add('open');
    drawerOverlay.classList.add('active');
    closeSidebar();
  }

  function closeSettings() {
    settingsPanel.classList.remove('open');
    if (!sidebarToc.classList.contains('open')) {
      drawerOverlay.classList.remove('active');
    }
  }

  function toggleQuickTheme() {
    prefs.theme = (prefs.theme === 'dark') ? 'sepia' : 'dark';
    applyPrefs();
  }

  // 9. Event Listeners
  btnToggleToc.addEventListener('click', openSidebar);
  btnCloseToc.addEventListener('click', closeSidebar);
  btnSettingsToggle.addEventListener('click', openSettings);
  btnCloseSettings.addEventListener('click', closeSettings);
  btnQuickTheme.addEventListener('click', toggleQuickTheme);

  drawerOverlay.addEventListener('click', () => {
    closeSidebar();
    closeSettings();
  });

  btnSearchToggle.addEventListener('click', () => {
    openSidebar();
    setTimeout(() => { tocSearchInput.focus(); }, 300);
  });

  tocSearchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    btnClearSearch.style.display = searchTerm ? 'block' : 'none';
    renderTocList();
  });

  btnClearSearch.addEventListener('click', () => {
    searchTerm = '';
    tocSearchInput.value = '';
    btnClearSearch.style.display = 'none';
    renderTocList();
    tocSearchInput.focus();
  });

  btnPrevChapter.addEventListener('click', () => {
    if (currentChapterIndex > 0) renderChapter(currentChapterIndex - 1);
  });
  btnNextChapter.addEventListener('click', () => {
    if (currentChapterIndex < chapters.length - 1) renderChapter(currentChapterIndex + 1);
  });

  dockBtnPrev.addEventListener('click', () => {
    if (currentChapterIndex > 0) renderChapter(currentChapterIndex - 1);
  });
  dockBtnNext.addEventListener('click', () => {
    if (currentChapterIndex < chapters.length - 1) renderChapter(currentChapterIndex + 1);
  });
  dockChapterIndicator.addEventListener('click', openSidebar);

  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Settings Panel Actions
  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.theme = btn.getAttribute('data-set-theme');
      applyPrefs();
    });
  });

  sizeSlider.addEventListener('input', (e) => {
    prefs.fontSize = parseInt(e.target.value, 10);
    applyPrefs();
  });

  btnSizeDec.addEventListener('click', () => {
    if (prefs.fontSize > 15) {
      prefs.fontSize--;
      applyPrefs();
    }
  });

  btnSizeInc.addEventListener('click', () => {
    if (prefs.fontSize < 26) {
      prefs.fontSize++;
      applyPrefs();
    }
  });

  document.querySelectorAll('[data-set-font]').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.fontFamily = btn.getAttribute('data-set-font');
      applyPrefs();
    });
  });

  document.querySelectorAll('[data-set-spacing]').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.spacing = btn.getAttribute('data-set-spacing');
      applyPrefs();
    });
  });

  document.querySelectorAll('[data-set-width]').forEach(btn => {
    btn.addEventListener('click', () => {
      prefs.width = btn.getAttribute('data-set-width');
      applyPrefs();
    });
  });

  // 10. Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === tocSearchInput) return;

    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentChapterIndex > 0) {
        e.preventDefault();
        renderChapter(currentChapterIndex - 1);
      }
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      if (currentChapterIndex < chapters.length - 1) {
        e.preventDefault();
        renderChapter(currentChapterIndex + 1);
      }
    } else if (e.key === 'Escape') {
      closeSidebar();
      closeSettings();
    } else if (e.key === 'm' || e.key === 'M') {
      sidebarToc.classList.contains('open') ? closeSidebar() : openSidebar();
    } else if (e.key === 't' || e.key === 'T') {
      toggleQuickTheme();
    }
  });

  // 11. Reading Progress Bar on Scroll
  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = 0;
    if (docHeight > 0) {
      percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    }
    progressBar.style.width = `${percent}%`;

    if (scrollTop > 400) {
      btnScrollTop.style.display = 'flex';
    } else {
      btnScrollTop.style.display = 'none';
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // 12. Helpers
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

  // 13. App Launch
  applyPrefs();
  renderPartFilters();
  renderTocList();
  renderChapter(currentChapterIndex, false);
  updateScrollProgress();
})();
