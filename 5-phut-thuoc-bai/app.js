/**
 * 5 PHÚT THUỘC BÀI - WEB APPLICATION CORE CONTROLLER
 * Architecture: Modular Vanilla JS with Reactive State & LocalStorage
 */

(function () {
  'use strict';

  // ==================== APP STATE ====================
  const state = {
    currentView: 'view-reader',
    currentChapterIndex: 0,
    currentBookPage: 1,
    bookViewMode: 'single', // 'single', 'dual', 'scroll'
    bookZoom: 100,
    numbersSubtab: 'numbers-grid',
    numberMethod: 'shape', // 'shape' (Method 1) or 'letter' (Method 2)
    numberSearchTerm: '',
    numberRangeFilter: 'all',
    flashcards: [],
    fcIndex: 0,
    fcFlipped: false,
    fcDirection: 'num-to-img',
    quiz: {
      active: false,
      questions: [],
      currentQ: 0,
      score: 0,
      streak: 0,
      timer: null,
      timeLeft: 10,
    },
    lightboxPage: 1,
    lightboxZoom: 100,
    theme: localStorage.getItem('5ptb_theme') || 'light',
    fontSize: parseInt(localStorage.getItem('5ptb_font_size') || '17', 10),
    fontFamily: localStorage.getItem('5ptb_font_family') || 'sans',
    checklist: JSON.parse(localStorage.getItem('5ptb_checklist') || '{}')
  };

  // ==================== DOM ELEMENTS CACHE ====================
  const dom = {
    // Header & Tabs
    appHeader: document.getElementById('appHeader'),
    brandLogoBtn: document.getElementById('brandLogoBtn'),
    navTabs: document.querySelectorAll('.nav-btn'),
    views: document.querySelectorAll('.app-view'),
    readingProgressBar: document.getElementById('readingProgressBar'),
    
    // Theme & Settings
    themeMenuBtn: document.getElementById('themeMenuBtn'),
    themeDropdown: document.getElementById('themeDropdown'),
    themeOptions: document.querySelectorAll('.theme-option'),
    fontMenuBtn: document.getElementById('fontMenuBtn'),
    fontDropdown: document.getElementById('fontDropdown'),
    fontIncBtn: document.getElementById('fontIncBtn'),
    fontDecBtn: document.getElementById('fontDecBtn'),
    fontSizeDisplay: document.getElementById('fontSizeDisplay'),
    fontFamilyBtns: document.querySelectorAll('.font-btn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),

    // View 1: Reader
    readerSidebar: document.getElementById('readerSidebar'),
    closeSidebarBtn: document.getElementById('closeSidebarBtn'),
    sidebarChaptersList: document.getElementById('sidebarChaptersList'),
    chapterFilterInput: document.getElementById('chapterFilterInput'),
    chapterContainer: document.getElementById('chapterContainer'),
    prevChapterBtn: document.getElementById('prevChapterBtn'),
    nextChapterBtn: document.getElementById('nextChapterBtn'),
    prevChapterTitle: document.getElementById('prevChapterTitle'),
    nextChapterTitle: document.getElementById('nextChapterTitle'),
    viewInOriginalBtn: document.getElementById('viewInOriginalBtn'),

    // View 2: Original Book
    bookPrevBtn: document.getElementById('bookPrevBtn'),
    bookNextBtn: document.getElementById('bookNextBtn'),
    pageNumberInput: document.getElementById('pageNumberInput'),
    chapterJumpSelect: document.getElementById('chapterJumpSelect'),
    modeSingleBtn: document.getElementById('modeSingleBtn'),
    modeDualBtn: document.getElementById('modeDualBtn'),
    modeScrollBtn: document.getElementById('modeScrollBtn'),
    zoomInBtn: document.getElementById('zoomInBtn'),
    zoomOutBtn: document.getElementById('zoomOutBtn'),
    zoomResetBtn: document.getElementById('zoomResetBtn'),
    zoomLevelDisplay: document.getElementById('zoomLevelDisplay'),
    bookFullscreenBtn: document.getElementById('bookFullscreenBtn'),
    bookStage: document.getElementById('bookStage'),
    bookPagesWrapper: document.getElementById('bookPagesWrapper'),
    thumbnailsDock: document.getElementById('thumbnailsDock'),
    toggleThumbBtn: document.getElementById('toggleThumbBtn'),
    thumbnailsTrack: document.getElementById('thumbnailsTrack'),

    // View 3: Numbers
    subtabBtns: document.querySelectorAll('.pill-btn'),
    numberSubviews: document.querySelectorAll('.numbers-subview'),
    methodShapeBtn: document.getElementById('methodShapeBtn'),
    methodLetterBtn: document.getElementById('methodLetterBtn'),
    numberSearchInput: document.getElementById('numberSearchInput'),
    clearNumberSearchBtn: document.getElementById('clearNumberSearchBtn'),
    rangeFilterContainer: document.getElementById('rangeFilterContainer'),
    numbersGrid: document.getElementById('numbersGrid'),
    
    // Flashcard
    fcRangeSelect: document.getElementById('fcRangeSelect'),
    fcShuffleBtn: document.getElementById('fcShuffleBtn'),
    activeFlashcard: document.getElementById('activeFlashcard'),
    fcFront: document.getElementById('fcFront'),
    fcBack: document.getElementById('fcBack'),
    fcAgainBtn: document.getElementById('fcAgainBtn'),
    fcGoodBtn: document.getElementById('fcGoodBtn'),
    fcCurrentIdx: document.getElementById('fcCurrentIdx'),
    fcTotalCards: document.getElementById('fcTotalCards'),

    // Quiz
    quizContainer: document.getElementById('quizContainer'),

    // View 4: Alphabet
    alphabetGrid: document.getElementById('alphabetGrid'),
    openChap5OriginalBtn: document.getElementById('openChap5OriginalBtn'),

    // View 5: Checklist
    checklistCircleProgress: document.getElementById('checklistCircleProgress'),
    checklistPercent: document.getElementById('checklistPercent'),
    resetChecklistBtn: document.getElementById('resetChecklistBtn'),
    checklistInputs: document.querySelectorAll('.cl-item input[type="checkbox"]'),

    // Global Search
    openSearchBtn: document.getElementById('openSearchBtn'),
    searchModal: document.getElementById('searchModal'),
    globalSearchInput: document.getElementById('globalSearchInput'),
    globalSearchResults: document.getElementById('globalSearchResults'),
    closeSearchModalBtn: document.getElementById('closeSearchModalBtn'),

    // Lightbox
    imageLightboxModal: document.getElementById('imageLightboxModal'),
    lightboxActiveImg: document.getElementById('lightboxActiveImg'),
    lightboxPageBadge: document.getElementById('lightboxPageBadge'),
    lightboxTitle: document.getElementById('lightboxTitle'),
    lbPrevBtn: document.getElementById('lbPrevBtn'),
    lbNextBtn: document.getElementById('lbNextBtn'),
    lbZoomIn: document.getElementById('lbZoomIn'),
    lbZoomOut: document.getElementById('lbZoomOut'),
    lbZoomReset: document.getElementById('lbZoomReset'),
    lbDownloadBtn: document.getElementById('lbDownloadBtn'),
    closeLightboxBtn: document.getElementById('closeLightboxBtn')
  };

  // Helper: Format page image path
  function getImagePath(pageNumber) {
    const pad = String(pageNumber).padStart(3, '0');
    return `images/page_${pad}.png`;
  }

  // ==================== INITIALIZATION ====================
  function init() {
    applyTheme(state.theme);
    applyFontSettings();
    renderSidebar();
    renderChapter(state.currentChapterIndex);
    initOriginalBookViewer();
    initNumbersGrid();
    initFlashcards();
    renderQuizStart();
    initAlphabetGrid();
    initChecklist();
    attachEventListeners();
    handleUrlHash();
  }

  // ==================== NAVIGATION & VIEW ROUTING ====================
  function switchView(targetViewId) {
    state.currentView = targetViewId;

    // Update Header Nav Tabs
    dom.navTabs.forEach(btn => {
      if (btn.getAttribute('data-target') === targetViewId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Views
    dom.views.forEach(view => {
      if (view.id === targetViewId) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // Auto actions on view switch
    if (targetViewId === 'view-original-book') {
      renderBookPage();
      scrollActiveThumbnailIntoView();
    } else if (targetViewId === 'view-reader') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ==================== THEME & FONTS ====================
  function applyTheme(themeName) {
    state.theme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('5ptb_theme', themeName);

    dom.themeOptions.forEach(opt => {
      if (opt.getAttribute('data-theme') === themeName) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }

  function applyFontSettings() {
    document.documentElement.style.fontSize = `${state.fontSize}px`;
    dom.fontSizeDisplay.textContent = `${state.fontSize}px`;
    localStorage.setItem('5ptb_font_size', state.fontSize);

    const fontFamilyValue = state.fontFamily === 'serif' 
      ? "var(--font-serif)" 
      : "var(--font-body)";
    document.documentElement.style.setProperty('--active-font', fontFamilyValue);
    localStorage.setItem('5ptb_font_family', state.fontFamily);

    dom.fontFamilyBtns.forEach(btn => {
      if (btn.getAttribute('data-font') === state.fontFamily) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // ==================== VIEW 1: CẨM NANG BÀI HỌC (CHAPTER READER) ====================
  function renderSidebar() {
    const chapters = BOOK_DATA.chapters;
    const parts = BOOK_DATA.parts;

    let html = '';

    parts.forEach(part => {
      const partChapters = chapters.filter(c => c.part_id === part.id);
      if (partChapters.length === 0) return;

      html += `
        <div class="part-group">
          <div class="part-header">
            <i class="fa-solid ${part.icon || 'fa-bookmark'}"></i>
            <span>${part.title}</span>
          </div>
          <div class="part-chapters-list">
      `;

      partChapters.forEach(chap => {
        const chapIndex = chapters.indexOf(chap);
        const isActive = chapIndex === state.currentChapterIndex;
        html += `
          <button class="chapter-item-btn ${isActive ? 'active' : ''}" data-chap-idx="${chapIndex}">
            <div class="ci-meta">
              <span class="ci-badge">Trang in ${chap.printed_page}</span>
              <span class="ci-time"><i class="fa-regular fa-clock"></i> ${chap.read_time}</span>
            </div>
            <div class="ci-title">${chap.title}</div>
          </button>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    dom.sidebarChaptersList.innerHTML = html;

    // Attach click events
    dom.sidebarChaptersList.querySelectorAll('.chapter-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-chap-idx'), 10);
        goToChapter(idx);
        if (window.innerWidth <= 1024) {
          dom.readerSidebar.classList.remove('open');
        }
      });
    });
  }

  function goToChapter(index) {
    if (index < 0 || index >= BOOK_DATA.chapters.length) return;
    state.currentChapterIndex = index;

    // Update sidebar active item
    dom.sidebarChaptersList.querySelectorAll('.chapter-item-btn').forEach(btn => {
      const idx = parseInt(btn.getAttribute('data-chap-idx'), 10);
      if (idx === index) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        btn.classList.remove('active');
      }
    });

    renderChapter(index);
    updateChapterPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderChapter(index) {
    const chap = BOOK_DATA.chapters[index];
    if (!chap) return;

    // Generate embedded original images grid
    let imagesHtml = '';
    const imgStart = chap.img_start;
    const imgEnd = chap.img_end;
    const totalImgs = (imgEnd - imgStart + 1);

    for (let p = imgStart; p <= imgEnd; p++) {
      const printedNum = p + 3;
      imagesHtml += `
        <div class="book-page-thumb-card">
          <div class="bpt-media" data-page="${p}">
            <img src="${getImagePath(p)}" alt="${chap.title} - Trang ${p}" class="bpt-img" loading="lazy">
            <div class="bpt-overlay-btn">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
              <span>Phóng to nét chuẩn</span>
            </div>
          </div>
          <div class="bpt-footer">
            <div class="bpt-info">
              <span class="bpt-page-num">Ảnh gốc ${p}/189</span>
              <span class="bpt-printed-num">Trang in ${printedNum}</span>
            </div>
            <div class="bpt-actions">
              <button class="bpt-action-btn view-book-btn" data-page="${p}" title="Mở trang này trong Sách Gốc">
                <i class="fa-solid fa-book-open"></i>
              </button>
              <a href="${getImagePath(p)}" download="5PTB_Trang_${p}.png" class="bpt-action-btn" title="Tải ảnh gốc về máy">
                <i class="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // Generate key points
    let keyPointsHtml = '';
    if (chap.key_points && chap.key_points.length > 0) {
      keyPointsHtml = `
        <div class="key-points-grid">
          ${chap.key_points.map((pt, i) => `
            <div class="kp-card">
              <div class="kp-icon"><i class="fa-solid fa-check"></i></div>
              <div class="kp-text">${pt}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Generate content blocks
    let contentBlocksHtml = '';
    if (chap.content_blocks && chap.content_blocks.length > 0) {
      contentBlocksHtml = chap.content_blocks.map(cb => {
        if (cb.type === 'quote') {
          return `<div class="content-block cb-quote">${cb.text}</div>`;
        } else if (cb.type === 'tip') {
          return `<div class="content-block cb-tip">${cb.text}</div>`;
        } else if (cb.type === 'highlight') {
          return `<div class="content-block cb-highlight">${cb.text}</div>`;
        } else {
          return `<p class="content-block cb-text">${cb.text}</p>`;
        }
      }).join('');
    }

    // Assemble Chapter HTML
    const html = `
      <!-- Hero -->
      <header class="chapter-hero">
        <div class="chapter-part-tag">
          <i class="fa-solid fa-layer-group"></i> ${chap.part_title}
        </div>
        <h1 class="chapter-main-title">${chap.title}</h1>
        ${chap.subtitle ? `<div class="chapter-subtitle">${chap.subtitle}</div>` : ''}
        
        <div class="chapter-meta-bar">
          <span><i class="fa-solid fa-file-lines"></i> Trang in sách: <strong>${chap.printed_page}</strong></span>
          <span><i class="fa-regular fa-image"></i> Ảnh gốc: <strong>${chap.img_start} - ${chap.img_end} (${totalImgs} trang)</strong></span>
          <span><i class="fa-regular fa-clock"></i> Thời gian đọc: <strong>${chap.read_time}</strong></span>
          <span class="jump-link" id="heroJumpToOriginalBtn"><i class="fa-solid fa-arrow-up-right-from-square"></i> Xem trong Sách Gốc</span>
        </div>
      </header>

      <!-- Summary Card -->
      <section class="summary-card">
        <div class="summary-card-title">
          <i class="fa-solid fa-bullseye"></i> Ý NGHĨA CỐT LÕI
        </div>
        <p>${chap.summary}</p>
      </section>

      <!-- Key Points Section -->
      ${keyPointsHtml}

      <!-- Detailed Content Blocks -->
      <section class="chapter-details-flow">
        ${contentBlocksHtml}
      </section>

      <!-- EMBEDDED ORIGINAL BOOK IMAGES SECTION -->
      <section class="chapter-images-section">
        <div class="cis-header">
          <div class="cis-title">
            <i class="fa-solid fa-images"></i>
            <span>TRANH MINH HỌA GỐC TỪ SÁCH (${totalImgs} TRANG)</span>
          </div>
          <span class="cis-badge">Click vào ảnh để phóng to siêu nét</span>
        </div>
        <div class="chapter-pages-grid">
          ${imagesHtml}
        </div>
      </section>
    `;

    dom.chapterContainer.innerHTML = html;

    // Attach click events on images for Lightbox
    dom.chapterContainer.querySelectorAll('.bpt-media').forEach(mediaEl => {
      mediaEl.addEventListener('click', () => {
        const pageNum = parseInt(mediaEl.getAttribute('data-page'), 10);
        openLightbox(pageNum, `${chap.title} - Trang ${pageNum}`);
      });
    });

    // Attach click on "view in book" buttons
    dom.chapterContainer.querySelectorAll('.view-book-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pageNum = parseInt(btn.getAttribute('data-page'), 10);
        state.currentBookPage = pageNum;
        switchView('view-original-book');
      });
    });

    // Jump from hero
    const heroJumpBtn = document.getElementById('heroJumpToOriginalBtn');
    if (heroJumpBtn) {
      heroJumpBtn.addEventListener('click', () => {
        state.currentBookPage = chap.img_start;
        switchView('view-original-book');
      });
    }
  }

  function updateChapterPagination() {
    const chapters = BOOK_DATA.chapters;
    const idx = state.currentChapterIndex;

    // Prev
    if (idx > 0) {
      dom.prevChapterBtn.disabled = false;
      dom.prevChapterTitle.textContent = chapters[idx - 1].title;
    } else {
      dom.prevChapterBtn.disabled = true;
      dom.prevChapterTitle.textContent = 'Đầu sách';
    }

    // Next
    if (idx < chapters.length - 1) {
      dom.nextChapterBtn.disabled = false;
      dom.nextChapterTitle.textContent = chapters[idx + 1].title;
    } else {
      dom.nextChapterBtn.disabled = true;
      dom.nextChapterTitle.textContent = 'Hết sách';
    }
  }

  // ==================== VIEW 2: SÁCH GỐC MINH HỌA (ORIGINAL BOOK VIEWER) ====================
  function initOriginalBookViewer() {
    // Populate jump dropdown
    let optsHtml = '';
    BOOK_DATA.chapters.forEach((chap, idx) => {
      optsHtml += `<option value="${chap.img_start}">Chương: ${chap.title} (Ảnh ${chap.img_start})</option>`;
    });
    dom.chapterJumpSelect.innerHTML = optsHtml;

    // Populate bottom thumbnails (all 189 pages)
    let thumbsHtml = '';
    for (let i = 1; i <= BOOK_DATA.bookInfo.totalPages; i++) {
      thumbsHtml += `
        <div class="thumb-item ${i === state.currentBookPage ? 'active' : ''}" data-page="${i}">
          <img src="${getImagePath(i)}" alt="Trang ${i}" loading="lazy">
          <span class="thumb-label">${i}</span>
        </div>
      `;
    }
    dom.thumbnailsTrack.innerHTML = thumbsHtml;

    // Attach click events on thumbnails
    dom.thumbnailsTrack.querySelectorAll('.thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const page = parseInt(thumb.getAttribute('data-page'), 10);
        goToBookPage(page);
      });
    });
  }

  function goToBookPage(pageNumber) {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > BOOK_DATA.bookInfo.totalPages) pageNumber = BOOK_DATA.bookInfo.totalPages;

    state.currentBookPage = pageNumber;
    dom.pageNumberInput.value = pageNumber;

    renderBookPage();
    scrollActiveThumbnailIntoView();
  }

  function renderBookPage() {
    const page = state.currentBookPage;
    const mode = state.bookViewMode;
    dom.bookStage.className = `book-stage ${mode}-mode`;

    // Apply Zoom
    dom.bookPagesWrapper.style.transform = `scale(${state.bookZoom / 100})`;
    dom.zoomLevelDisplay.textContent = `${state.bookZoom}%`;

    let html = '';

    if (mode === 'single') {
      html = `
        <div class="original-page-sheet single-page">
          <img src="${getImagePath(page)}" alt="Trang ${page}" class="book-display-img">
        </div>
      `;
    } else if (mode === 'dual') {
      // Dual-page view: like a real open book (even left, odd right)
      let leftPage = page;
      let rightPage = page + 1;
      
      // If currently on odd page > 1, make it the right page
      if (page % 2 === 1 && page > 1) {
        leftPage = page - 1;
        rightPage = page;
      }

      html = `
        <div class="original-page-sheet left-page">
          <img src="${getImagePath(leftPage)}" alt="Trang ${leftPage}" class="book-display-img">
          <div class="dual-spine-shadow"></div>
        </div>
        ${rightPage <= BOOK_DATA.bookInfo.totalPages ? `
          <div class="original-page-sheet right-page">
            <img src="${getImagePath(rightPage)}" alt="Trang ${rightPage}" class="book-display-img">
            <div class="dual-spine-shadow"></div>
          </div>
        ` : ''}
      `;
    } else if (mode === 'scroll') {
      // Continuous vertical scroll (render 10 pages around current)
      const startP = Math.max(1, page - 4);
      const endP = Math.min(BOOK_DATA.bookInfo.totalPages, page + 6);
      for (let p = startP; p <= endP; p++) {
        html += `
          <div class="original-page-sheet scroll-sheet" id="sheet-page-${p}">
            <img src="${getImagePath(p)}" alt="Trang ${p}" class="book-display-img" loading="lazy">
          </div>
        `;
      }
    }

    dom.bookPagesWrapper.innerHTML = html;

    // Update thumbnail active
    dom.thumbnailsTrack.querySelectorAll('.thumb-item').forEach(thumb => {
      const p = parseInt(thumb.getAttribute('data-page'), 10);
      if (p === state.currentBookPage) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });

    // Update chapter jump select dropdown value
    const matchedChap = BOOK_DATA.chapters.find(c => page >= c.img_start && page <= c.img_end);
    if (matchedChap) {
      dom.chapterJumpSelect.value = matchedChap.img_start;
    }
  }

  function scrollActiveThumbnailIntoView() {
    const activeThumb = dom.thumbnailsTrack.querySelector('.thumb-item.active');
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  // ==================== VIEW 3: SIÊU MÃ HÓA 00 - 99 ====================
  function initNumbersGrid() {
    renderNumbersGrid();
  }

  function renderNumbersGrid() {
    const numbers = BOOK_DATA.numbers0099;
    const term = state.numberSearchTerm.trim().toLowerCase();
    const range = state.numberRangeFilter;
    const method = state.numberMethod;

    const filtered = numbers.filter(item => {
      // Range filter
      if (range !== 'all') {
        const numVal = parseInt(item.num, 10);
        const rVal = parseInt(range, 10);
        if (Math.floor(numVal / 10) !== rVal) return false;
      }

      // Search term
      if (term) {
        const matchNum = item.num.includes(term);
        const matchName = item.name.toLowerCase().includes(term);
        const matchEn = item.en.toLowerCase().includes(term);
        const matchM2 = item.method2.toLowerCase().includes(term);
        return matchNum || matchName || matchEn || matchM2;
      }
      return true;
    });

    if (filtered.length === 0) {
      dom.numbersGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
          <p>Không tìm thấy con số phù hợp với từ khóa "<strong>${state.numberSearchTerm}</strong>".</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(item => {
      const displayName = method === 'shape' ? item.method1 : item.method2;
      const targetPage = method === 'shape' ? item.img_page : item.m2_page;

      html += `
        <div class="num-card" data-num="${item.num}" data-page="${targetPage}">
          <div class="nc-number">${item.num}</div>
          ${method === 'letter' ? `<span class="nc-method2-badge">Chữ cái âm đầu</span>` : ''}
          <div class="nc-name">${displayName}</div>
          <div class="nc-en">${item.en}</div>
          <div class="nc-footer">
            <span>Sách gốc: Ảnh ${targetPage}</span>
            <span class="nc-orig-link"><i class="fa-solid fa-eye"></i> Xem ảnh</span>
          </div>
        </div>
      `;
    });

    dom.numbersGrid.innerHTML = html;

    // Attach click to open lightbox on original page containing this number
    dom.numbersGrid.querySelectorAll('.num-card').forEach(card => {
      card.addEventListener('click', () => {
        const pageNum = parseInt(card.getAttribute('data-page'), 10);
        const num = card.getAttribute('data-num');
        openLightbox(pageNum, `Mã hóa số ${num} trong sách gốc 5 Phút Thuộc Bài`);
      });
    });
  }

  // ==================== FLASHCARDS CONTROLLER ====================
  function initFlashcards() {
    const range = dom.fcRangeSelect.value;
    let list = [...BOOK_DATA.numbers0099];
    if (range !== 'all') {
      const rVal = parseInt(range, 10);
      list = list.filter(item => Math.floor(parseInt(item.num, 10) / 10) === rVal);
    }
    state.flashcards = list;
    state.fcIndex = 0;
    state.fcFlipped = false;
    renderActiveFlashcard();
  }

  function renderActiveFlashcard() {
    if (state.flashcards.length === 0) return;
    const cardData = state.flashcards[state.fcIndex];
    state.fcFlipped = false;
    dom.activeFlashcard.classList.remove('flipped');

    const method = state.numberMethod;
    const name = method === 'shape' ? cardData.method1 : cardData.method2;

    if (state.fcDirection === 'num-to-img') {
      dom.fcFront.innerHTML = `
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Con số</span>
        <div class="fc-big-num">${cardData.num}</div>
        <span style="font-size: 0.82rem; color: var(--primary); font-weight: 600;">(Bấm để lật mở hình ảnh)</span>
      `;
      dom.fcBack.innerHTML = `
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">Hình ảnh mã hóa</span>
        <div class="fc-big-title">${name}</div>
        <div class="fc-big-sub">${cardData.en}</div>
        <span style="margin-top: 14px; font-size: 0.8rem; color: var(--text-muted);">Sách gốc trang: Ảnh ${cardData.img_page}</span>
      `;
    } else {
      dom.fcFront.innerHTML = `
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Hình ảnh</span>
        <div class="fc-big-title">${name}</div>
        <div class="fc-big-sub">${cardData.en}</div>
        <span style="margin-top: 14px; font-size: 0.82rem; color: var(--primary); font-weight: 600;">(Bấm để xem số)</span>
      `;
      dom.fcBack.innerHTML = `
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">Con số tương ứng</span>
        <div class="fc-big-num">${cardData.num}</div>
      `;
    }

    dom.fcCurrentIdx.textContent = state.fcIndex + 1;
    dom.fcTotalCards.textContent = state.flashcards.length;
  }

  function nextFlashcard() {
    if (state.fcIndex < state.flashcards.length - 1) {
      state.fcIndex++;
    } else {
      state.fcIndex = 0; // loop
    }
    renderActiveFlashcard();
  }

  // ==================== QUIZ CHALLENGE ENGINE ====================
  function renderQuizStart() {
    dom.quizContainer.innerHTML = `
      <div style="text-align: center; padding: 20px 0;">
        <div style="width: 80px; height: 80px; margin: 0 auto 16px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 2.2rem;">
          <i class="fa-solid fa-gamepad"></i>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; margin-bottom: 8px;">Thử Thách Phản Xạ 10 Giây</h3>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 24px;">Rèn luyện phản xạ siêu tốc &lt; 1 giây giữa Con Số và Hình Ảnh. Trả lời 10 câu hỏi ngẫu nhiên trong thời gian quy định!</p>
        
        <div style="display: flex; justify-content: center; gap: 14px; margin-bottom: 28px;">
          <button class="pill-btn active" id="quizStartShapeBtn">
            <i class="fa-solid fa-shapes"></i> Theo Hình Dáng
          </button>
          <button class="pill-btn" id="quizStartLetterBtn">
            <i class="fa-solid fa-spell-check"></i> Theo Chữ Cái Quy Ước
          </button>
        </div>

        <button class="pill-btn" id="startQuizBtn" style="padding: 16px 36px; font-size: 1.1rem; background: var(--primary); color: #FFF;">
          <i class="fa-solid fa-play"></i> BẮT ĐẦU CHƠI NGAY
        </button>
      </div>
    `;

    let quizMethod = 'shape';
    const shapeBtn = document.getElementById('quizStartShapeBtn');
    const letterBtn = document.getElementById('quizStartLetterBtn');

    if (shapeBtn && letterBtn) {
      shapeBtn.addEventListener('click', () => {
        quizMethod = 'shape';
        shapeBtn.classList.add('active');
        letterBtn.classList.remove('active');
      });
      letterBtn.addEventListener('click', () => {
        quizMethod = 'letter';
        letterBtn.classList.add('active');
        shapeBtn.classList.remove('active');
      });
    }

    const startBtn = document.getElementById('startQuizBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        startQuiz(quizMethod);
      });
    }
  }

  function startQuiz(method) {
    const all = [...BOOK_DATA.numbers0099];
    // Shuffle and pick 10 questions
    all.sort(() => 0.5 - Math.random());
    const selected = all.slice(0, 10);

    state.quiz.active = true;
    state.quiz.method = method;
    state.quiz.questions = selected.map(item => {
      const correct = method === 'shape' ? item.method1 : item.method2;
      // generate 3 distractors
      const others = all.filter(o => o.num !== item.num).sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [correct, ...others.map(o => method === 'shape' ? o.method1 : o.method2)].sort(() => 0.5 - Math.random());
      return {
        num: item.num,
        correct: correct,
        options: options
      };
    });

    state.quiz.currentQ = 0;
    state.quiz.score = 0;
    state.quiz.streak = 0;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (state.quiz.currentQ >= state.quiz.questions.length) {
      renderQuizResult();
      return;
    }

    const q = state.quiz.questions[state.quiz.currentQ];
    state.quiz.timeLeft = 10;

    dom.quizContainer.innerHTML = `
      <div class="quiz-head">
        <div class="quiz-timer-box">
          <i class="fa-solid fa-stopwatch"></i>
          <span id="quizTimerVal">${state.quiz.timeLeft}s</span>
        </div>
        <div class="quiz-score-badge">
          Điểm: ${state.quiz.score} | Câu ${state.quiz.currentQ + 1}/10
        </div>
      </div>

      <div class="quiz-question-box">
        <div class="quiz-q-label">Con số này được mã hóa thành hình gì?</div>
        <div class="quiz-q-main">${q.num}</div>
      </div>

      <div class="quiz-options-grid">
        ${q.options.map(opt => `
          <button class="quiz-opt-btn" data-answer="${opt}">${opt}</button>
        `).join('')}
      </div>
    `;

    // Start Timer
    clearInterval(state.quiz.timer);
    state.quiz.timer = setInterval(() => {
      state.quiz.timeLeft--;
      const timerEl = document.getElementById('quizTimerVal');
      if (timerEl) timerEl.textContent = `${state.quiz.timeLeft}s`;

      if (state.quiz.timeLeft <= 0) {
        clearInterval(state.quiz.timer);
        handleQuizAnswer(null); // Timeout
      }
    }, 1000);

    // Option clicks
    dom.quizContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(state.quiz.timer);
        const ans = btn.getAttribute('data-answer');
        handleQuizAnswer(ans, btn);
      });
    });
  }

  function handleQuizAnswer(userAnswer, btnEl) {
    const q = state.quiz.questions[state.quiz.currentQ];
    const isCorrect = userAnswer === q.correct;

    if (isCorrect) {
      state.quiz.score += 10 + state.quiz.timeLeft; // time bonus
      state.quiz.streak++;
      if (btnEl) btnEl.classList.add('correct');
    } else {
      state.quiz.streak = 0;
      if (btnEl) btnEl.classList.add('wrong');
      // Highlight the correct answer
      dom.quizContainer.querySelectorAll('.quiz-opt-btn').forEach(b => {
        if (b.getAttribute('data-answer') === q.correct) {
          b.classList.add('correct');
        }
      });
    }

    // Disable all options
    dom.quizContainer.querySelectorAll('.quiz-opt-btn').forEach(b => b.disabled = true);

    setTimeout(() => {
      state.quiz.currentQ++;
      renderQuizQuestion();
    }, 1200);
  }

  function renderQuizResult() {
    clearInterval(state.quiz.timer);
    const score = state.quiz.score;
    let badgeText = 'Xuất Sắc - Bộ Não Siêu Phàm!';
    let badgeColor = '#10B981';

    if (score < 50) {
      badgeText = 'Cần luyện tập thêm mỗi ngày nhé!';
      badgeColor = '#EF4444';
    } else if (score < 100) {
      badgeText = 'Rất Tốt - Trí nhớ đang tiến bộ vượt bậc!';
      badgeColor = '#FFB703';
    }

    dom.quizContainer.innerHTML = `
      <div style="text-align: center; padding: 24px 0;">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
        <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; margin-bottom: 6px;">Tổng Kết Thử Thách</h3>
        <div style="font-size: 1.1rem; font-weight: 700; color: ${badgeColor}; margin-bottom: 20px;">${badgeText}</div>
        
        <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 20px; max-width: 300px; margin: 0 auto 28px;">
          <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Tổng điểm đạt được</div>
          <div style="font-family: var(--font-display); font-size: 3rem; font-weight: 900; color: var(--primary); line-height: 1.1;">${score}</div>
        </div>

        <button class="pill-btn" id="quizReplayBtn" style="padding: 14px 32px; font-size: 1rem; background: var(--primary); color: #FFF;">
          <i class="fa-solid fa-rotate-right"></i> Chơi Lại Ván Mới
        </button>
      </div>
    `;

    document.getElementById('quizReplayBtn').addEventListener('click', renderQuizStart);
  }

  // ==================== VIEW 4: MÃ HÓA 26 CHỮ CÁI A - Z ====================
  function initAlphabetGrid() {
    let html = '';
    BOOK_DATA.alphabetLetters.forEach(item => {
      html += `
        <div class="alpha-card" data-page="${item.img_page}">
          <div class="ac-char">${item.char}</div>
          <div class="ac-word">${item.word}</div>
          <div class="ac-en">${item.en}</div>
          <div class="nc-footer">
            <span>Sách gốc: Ảnh ${item.img_page}</span>
            <span class="nc-orig-link"><i class="fa-solid fa-eye"></i> Xem</span>
          </div>
        </div>
      `;
    });
    dom.alphabetGrid.innerHTML = html;

    dom.alphabetGrid.querySelectorAll('.alpha-card').forEach(card => {
      card.addEventListener('click', () => {
        const p = parseInt(card.getAttribute('data-page'), 10);
        openLightbox(p, `Mã hóa chữ cái trong sách gốc`);
      });
    });

    if (dom.openChap5OriginalBtn) {
      dom.openChap5OriginalBtn.addEventListener('click', () => {
        state.currentBookPage = 26; // img 26 (printed page 29)
        switchView('view-original-book');
      });
    }
  }

  // ==================== VIEW 5: CHECKLIST 6 - 3 - 4 ====================
  function initChecklist() {
    // Restore checklist from localStorage
    dom.checklistInputs.forEach(input => {
      const id = input.getAttribute('data-cl-id');
      if (state.checklist[id]) {
        input.checked = true;
      }

      input.addEventListener('change', () => {
        state.checklist[id] = input.checked;
        localStorage.setItem('5ptb_checklist', JSON.stringify(state.checklist));
        updateChecklistProgress();
      });
    });

    if (dom.resetChecklistBtn) {
      dom.resetChecklistBtn.addEventListener('click', () => {
        if (confirm('Bạn có muốn làm mới bảng kiểm tra cho ngày hôm nay?')) {
          state.checklist = {};
          localStorage.removeItem('5ptb_checklist');
          dom.checklistInputs.forEach(input => input.checked = false);
          updateChecklistProgress();
        }
      });
    }

    updateChecklistProgress();
  }

  function updateChecklistProgress() {
    const total = dom.checklistInputs.length;
    let checkedCount = 0;
    dom.checklistInputs.forEach(i => {
      if (i.checked) checkedCount++;
    });

    const percent = Math.round((checkedCount / total) * 100);
    dom.checklistPercent.textContent = `${percent}%`;
    dom.checklistCircleProgress.style.borderTopColor = percent === 100 ? '#10B981' : 'var(--accent-yellow)';
  }

  // ==================== GLOBAL SEARCH MODAL ====================
  function openSearchModal() {
    dom.searchModal.classList.add('active');
    dom.searchModal.setAttribute('aria-hidden', 'false');
    dom.globalSearchInput.focus();
    dom.globalSearchInput.select();
  }

  function closeSearchModal() {
    dom.searchModal.classList.remove('active');
    dom.searchModal.setAttribute('aria-hidden', 'true');
  }

  function executeGlobalSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      dom.globalSearchResults.innerHTML = `
        <div class="search-empty-state">
          <i class="fa-solid fa-keyboard"></i>
          <p>Nhập từ khóa bất kỳ để tìm kiếm tức thì trên toàn bộ 24 chương sách và 100 số mã hóa.</p>
        </div>
      `;
      return;
    }

    const results = [];

    // Search Chapters
    BOOK_DATA.chapters.forEach((chap, idx) => {
      const matchTitle = chap.title.toLowerCase().includes(q);
      const matchSub = chap.subtitle && chap.subtitle.toLowerCase().includes(q);
      const matchSum = chap.summary && chap.summary.toLowerCase().includes(q);
      if (matchTitle || matchSub || matchSum) {
        results.push({
          type: 'Chương sách',
          title: chap.title,
          desc: chap.summary.substring(0, 110) + '...',
          action: () => {
            closeSearchModal();
            switchView('view-reader');
            goToChapter(idx);
          }
        });
      }
    });

    // Search Numbers 00-99
    BOOK_DATA.numbers0099.forEach(item => {
      if (item.num.includes(q) || item.name.toLowerCase().includes(q) || item.en.toLowerCase().includes(q) || item.method2.toLowerCase().includes(q)) {
        results.push({
          type: 'Mã Hóa Số',
          title: `Số ${item.num} -> ${item.name} (${item.en})`,
          desc: `Cách 2: ${item.method2} | Sách gốc ảnh ${item.img_page}`,
          action: () => {
            closeSearchModal();
            switchView('view-numbers');
            state.numberSearchTerm = item.num;
            dom.numberSearchInput.value = item.num;
            renderNumbersGrid();
          }
        });
      }
    });

    // Search Alphabet
    BOOK_DATA.alphabetLetters.forEach(item => {
      if (item.char.toLowerCase() === q || item.word.toLowerCase().includes(q)) {
        results.push({
          type: 'Mã Hóa Chữ',
          title: `Chữ cái ${item.char} -> ${item.word} (${item.en})`,
          desc: `Chương 5: Sách gốc trang ảnh ${item.img_page}`,
          action: () => {
            closeSearchModal();
            switchView('view-alphabet');
          }
        });
      }
    });

    if (results.length === 0) {
      dom.globalSearchResults.innerHTML = `
        <div class="search-empty-state">
          <i class="fa-solid fa-face-frown"></i>
          <p>Không tìm thấy kết quả nào phù hợp với "<strong>${query}</strong>". Thử tìm từ khác nhé!</p>
        </div>
      `;
      return;
    }

    let html = '';
    results.slice(0, 15).forEach(res => {
      html += `
        <div class="search-result-item">
          <div class="sri-left">
            <span class="sri-type">${res.type}</span>
            <div class="sri-title">${res.title}</div>
            <div class="sri-desc">${res.desc}</div>
          </div>
          <i class="fa-solid fa-arrow-right" style="color: var(--primary);"></i>
        </div>
      `;
    });

    dom.globalSearchResults.innerHTML = html;

    dom.globalSearchResults.querySelectorAll('.search-result-item').forEach((itemEl, idx) => {
      itemEl.addEventListener('click', () => {
        results[idx].action();
      });
    });
  }

  // ==================== LIGHTBOX MODAL ====================
  function openLightbox(pageNumber, title) {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > BOOK_DATA.bookInfo.totalPages) pageNumber = BOOK_DATA.bookInfo.totalPages;

    state.lightboxPage = pageNumber;
    state.lightboxZoom = 100;

    dom.lightboxPageBadge.textContent = `Trang ${pageNumber} / ${BOOK_DATA.bookInfo.totalPages}`;
    dom.lightboxTitle.textContent = title || `Sách Gốc 5 Phút Thuộc Bài - Trang ${pageNumber}`;
    dom.lightboxActiveImg.src = getImagePath(pageNumber);
    dom.lightboxActiveImg.style.transform = `scale(1)`;
    dom.lbDownloadBtn.href = getImagePath(pageNumber);
    dom.lbDownloadBtn.setAttribute('download', `5PTB_Trang_${pageNumber}.png`);

    dom.imageLightboxModal.classList.add('active');
    dom.imageLightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    dom.imageLightboxModal.classList.remove('active');
    dom.imageLightboxModal.setAttribute('aria-hidden', 'true');
  }

  // ==================== EVENT LISTENERS ====================
  function attachEventListeners() {
    // Brand Logo click -> back to reader view chapter 0
    dom.brandLogoBtn.addEventListener('click', () => {
      switchView('view-reader');
      goToChapter(0);
    });

    // Main Navigation Tabs
    dom.navTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        switchView(target);
      });
    });

    // Theme dropdown
    dom.themeMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dom.themeDropdown.classList.toggle('show');
      dom.fontDropdown.classList.remove('show');
    });

    dom.themeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const theme = opt.getAttribute('data-theme');
        applyTheme(theme);
        dom.themeDropdown.classList.remove('show');
      });
    });

    // Font dropdown
    dom.fontMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dom.fontDropdown.classList.toggle('show');
      dom.themeDropdown.classList.remove('show');
    });

    dom.fontIncBtn.addEventListener('click', () => {
      if (state.fontSize < 24) {
        state.fontSize++;
        applyFontSettings();
      }
    });

    dom.fontDecBtn.addEventListener('click', () => {
      if (state.fontSize > 14) {
        state.fontSize--;
        applyFontSettings();
      }
    });

    dom.fontFamilyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.fontFamily = btn.getAttribute('data-font');
        applyFontSettings();
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      dom.themeDropdown.classList.remove('show');
      dom.fontDropdown.classList.remove('show');
    });

    // Mobile Sidebar toggle
    dom.mobileMenuBtn.addEventListener('click', () => {
      if (state.currentView !== 'view-reader') {
        switchView('view-reader');
      }
      dom.readerSidebar.classList.toggle('open');
    });

    if (dom.closeSidebarBtn) {
      dom.closeSidebarBtn.addEventListener('click', () => {
        dom.readerSidebar.classList.remove('open');
      });
    }

    // Sidebar Chapter Filter
    dom.chapterFilterInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      dom.sidebarChaptersList.querySelectorAll('.chapter-item-btn').forEach(btn => {
        const text = btn.textContent.toLowerCase();
        btn.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });

    // Reader Pagination
    dom.prevChapterBtn.addEventListener('click', () => {
      goToChapter(state.currentChapterIndex - 1);
    });

    dom.nextChapterBtn.addEventListener('click', () => {
      goToChapter(state.currentChapterIndex + 1);
    });

    dom.viewInOriginalBtn.addEventListener('click', () => {
      const chap = BOOK_DATA.chapters[state.currentChapterIndex];
      state.currentBookPage = chap.img_start;
      switchView('view-original-book');
    });

    // Book Viewer Controls
    dom.bookPrevBtn.addEventListener('click', () => {
      goToBookPage(state.currentBookPage - (state.bookViewMode === 'dual' ? 2 : 1));
    });

    dom.bookNextBtn.addEventListener('click', () => {
      goToBookPage(state.currentBookPage + (state.bookViewMode === 'dual' ? 2 : 1));
    });

    dom.pageNumberInput.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val)) goToBookPage(val);
    });

    dom.chapterJumpSelect.addEventListener('change', (e) => {
      const page = parseInt(e.target.value, 10);
      goToBookPage(page);
    });

    // Book View Mode toggles
    dom.modeSingleBtn.addEventListener('click', () => {
      state.bookViewMode = 'single';
      dom.modeSingleBtn.classList.add('active');
      dom.modeDualBtn.classList.remove('active');
      dom.modeScrollBtn.classList.remove('active');
      renderBookPage();
    });

    dom.modeDualBtn.addEventListener('click', () => {
      state.bookViewMode = 'dual';
      dom.modeDualBtn.classList.add('active');
      dom.modeSingleBtn.classList.remove('active');
      dom.modeScrollBtn.classList.remove('active');
      renderBookPage();
    });

    dom.modeScrollBtn.addEventListener('click', () => {
      state.bookViewMode = 'scroll';
      dom.modeScrollBtn.classList.add('active');
      dom.modeSingleBtn.classList.remove('active');
      dom.modeDualBtn.classList.remove('active');
      renderBookPage();
    });

    // Book Zoom controls
    dom.zoomInBtn.addEventListener('click', () => {
      if (state.bookZoom < 200) {
        state.bookZoom += 15;
        renderBookPage();
      }
    });

    dom.zoomOutBtn.addEventListener('click', () => {
      if (state.bookZoom > 60) {
        state.bookZoom -= 15;
        renderBookPage();
      }
    });

    dom.zoomResetBtn.addEventListener('click', () => {
      state.bookZoom = 100;
      renderBookPage();
    });

    dom.bookFullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        dom.bookStage.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen();
      }
    });

    dom.toggleThumbBtn.addEventListener('click', () => {
      dom.thumbnailsDock.classList.toggle('collapsed');
      const icon = dom.toggleThumbBtn.querySelector('i');
      if (dom.thumbnailsDock.classList.contains('collapsed')) {
        icon.className = 'fa-solid fa-angle-up';
      } else {
        icon.className = 'fa-solid fa-angle-down';
      }
    });

    // Numbers Subtabs
    dom.subtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subtab = btn.getAttribute('data-subtab');
        state.numbersSubtab = subtab;

        dom.subtabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        dom.numberSubviews.forEach(view => {
          if (view.id === `subview-${subtab}`) {
            view.classList.add('active');
          } else {
            view.classList.remove('active');
          }
        });
      });
    });

    // Method Toggles
    dom.methodShapeBtn.addEventListener('click', () => {
      state.numberMethod = 'shape';
      dom.methodShapeBtn.classList.add('active');
      dom.methodLetterBtn.classList.remove('active');
      renderNumbersGrid();
      renderActiveFlashcard();
    });

    dom.methodLetterBtn.addEventListener('click', () => {
      state.numberMethod = 'letter';
      dom.methodLetterBtn.classList.add('active');
      dom.methodShapeBtn.classList.remove('active');
      renderNumbersGrid();
      renderActiveFlashcard();
    });

    // Number Search
    dom.numberSearchInput.addEventListener('input', (e) => {
      state.numberSearchTerm = e.target.value;
      dom.clearNumberSearchBtn.style.display = e.target.value ? 'block' : 'none';
      renderNumbersGrid();
    });

    dom.clearNumberSearchBtn.addEventListener('click', () => {
      dom.numberSearchInput.value = '';
      state.numberSearchTerm = '';
      dom.clearNumberSearchBtn.style.display = 'none';
      renderNumbersGrid();
    });

    // Range filter buttons
    dom.rangeFilterContainer.querySelectorAll('.range-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.rangeFilterContainer.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.numberRangeFilter = btn.getAttribute('data-range');
        renderNumbersGrid();
      });
    });

    // Flashcard interactions
    dom.activeFlashcard.addEventListener('click', () => {
      state.fcFlipped = !state.fcFlipped;
      dom.activeFlashcard.classList.toggle('flipped', state.fcFlipped);
    });

    document.querySelectorAll('input[name="fcDir"]').forEach(r => {
      r.addEventListener('change', (e) => {
        state.fcDirection = e.target.value;
        renderActiveFlashcard();
      });
    });

    dom.fcRangeSelect.addEventListener('change', initFlashcards);

    dom.fcShuffleBtn.addEventListener('click', () => {
      state.flashcards.sort(() => 0.5 - Math.random());
      state.fcIndex = 0;
      renderActiveFlashcard();
    });

    dom.fcAgainBtn.addEventListener('click', nextFlashcard);
    dom.fcGoodBtn.addEventListener('click', nextFlashcard);

    // Global Search Modal
    dom.openSearchBtn.addEventListener('click', openSearchModal);
    dom.closeSearchModalBtn.addEventListener('click', closeSearchModal);
    dom.searchModal.addEventListener('click', (e) => {
      if (e.target === dom.searchModal) closeSearchModal();
    });

    dom.globalSearchInput.addEventListener('input', (e) => {
      executeGlobalSearch(e.target.value);
    });

    // Lightbox Controls
    dom.closeLightboxBtn.addEventListener('click', closeLightbox);
    dom.imageLightboxModal.addEventListener('click', (e) => {
      if (e.target === dom.imageLightboxModal) closeLightbox();
    });

    dom.lbPrevBtn.addEventListener('click', () => {
      if (state.lightboxPage > 1) {
        openLightbox(state.lightboxPage - 1);
      }
    });

    dom.lbNextBtn.addEventListener('click', () => {
      if (state.lightboxPage < BOOK_DATA.bookInfo.totalPages) {
        openLightbox(state.lightboxPage + 1);
      }
    });

    dom.lbZoomIn.addEventListener('click', () => {
      if (state.lightboxZoom < 250) {
        state.lightboxZoom += 25;
        dom.lightboxActiveImg.style.transform = `scale(${state.lightboxZoom / 100})`;
      }
    });

    dom.lbZoomOut.addEventListener('click', () => {
      if (state.lightboxZoom > 60) {
        state.lightboxZoom -= 25;
        dom.lightboxActiveImg.style.transform = `scale(${state.lightboxZoom / 100})`;
      }
    });

    dom.lbZoomReset.addEventListener('click', () => {
      state.lightboxZoom = 100;
      dom.lightboxActiveImg.style.transform = `scale(1)`;
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Ctrl+K -> Search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
        return;
      }

      // Escape -> close modals
      if (e.key === 'Escape') {
        closeSearchModal();
        closeLightbox();
        dom.readerSidebar.classList.remove('open');
        return;
      }

      // Inside Lightbox -> Left / Right
      if (dom.imageLightboxModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') dom.lbPrevBtn.click();
        if (e.key === 'ArrowRight') dom.lbNextBtn.click();
        return;
      }

      // Inside Original Book -> Left / Right
      if (state.currentView === 'view-original-book') {
        if (e.key === 'ArrowLeft') dom.bookPrevBtn.click();
        if (e.key === 'ArrowRight') dom.bookNextBtn.click();
        return;
      }

      // Inside Flashcard -> Space to flip
      if (state.currentView === 'view-numbers' && state.numbersSubtab === 'numbers-flashcard') {
        if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          dom.activeFlashcard.click();
        }
      }
    });

    // Scroll listener for reading progress bar
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const progress = (window.scrollY / scrollTotal) * 100;
        dom.readingProgressBar.style.width = `${progress}%`;
      }
    }, { passive: true });
  }

  // Handle URL hash on load
  function handleUrlHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('chapter-')) {
      const chapId = hash.replace('chapter-', '');
      const idx = BOOK_DATA.chapters.findIndex(c => c.id === chapId);
      if (idx !== -1) {
        goToChapter(idx);
      }
    } else if (hash.startsWith('page-')) {
      const pageNum = parseInt(hash.replace('page-', ''), 10);
      if (!isNaN(pageNum)) {
        switchView('view-original-book');
        goToBookPage(pageNum);
      }
    }
  }

  // Start the application
  window.addEventListener('DOMContentLoaded', init);

})();
