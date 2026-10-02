/**
 * TỦ SÁCH HAY - Homepage App Controller
 */

(function () {
  'use strict';

  const catalog = window.BOOKS_CATALOG || [];
  const booksGrid = document.getElementById('books-grid-container');
  const catTabsContainer = document.getElementById('category-tabs-container');
  const searchInput = document.getElementById('global-search-input');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const iconMoon = btnThemeToggle ? btnThemeToggle.querySelector('.icon-moon') : null;
  const iconSun = btnThemeToggle ? btnThemeToggle.querySelector('.icon-sun') : null;
  const btnLabel = btnThemeToggle ? btnThemeToggle.querySelector('.btn-label-desktop') : null;

  // Continue reading elements
  const continueBox = document.getElementById('continue-reading-container');
  const continueBookTitle = document.getElementById('continue-book-title');
  const continueChapterName = document.getElementById('continue-chapter-name');
  const continueLink = document.getElementById('continue-reading-link');

  let currentCategory = 'all';
  let searchTerm = '';

  // 1. Theme Management (Sync with Reader)
  const THEME_STORAGE_KEY = 'khong_tu_reader_prefs_v1';
  let currentTheme = 'sepia';

  try {
    const savedPrefs = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedPrefs) {
      const parsed = JSON.parse(savedPrefs);
      if (parsed.theme) currentTheme = parsed.theme;
    }
  } catch (e) {}

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#121418' : '#f5eedf');
    }

    if (iconMoon && iconSun) {
      if (theme === 'dark') {
        iconMoon.style.display = 'none';
        iconSun.style.display = 'inline-block';
        if (btnLabel) btnLabel.textContent = 'Ban ngày';
      } else {
        iconMoon.style.display = 'inline-block';
        iconSun.style.display = 'none';
        if (btnLabel) btnLabel.textContent = 'Ban đêm';
      }
    }

    // Save to sync with reader
    try {
      let prefs = {};
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved) prefs = JSON.parse(saved);
      prefs.theme = theme;
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {}
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'sepia' : 'dark');
    });
  }

  applyTheme(currentTheme);

  // 2. Continue Reading Card
  function checkContinueReading() {
    try {
      const lastChap = localStorage.getItem('khong_tu_reader_last_chap');
      if (lastChap !== null && continueBox) {
        const chapIdx = parseInt(lastChap, 10);
        continueBookTitle.textContent = 'Trí Tuệ Khổng Tử';
        continueChapterName.textContent = `Đang đọc: Thiên thứ ${chapIdx + 1} / 91`;
        continueLink.href = `reader.html?book=tri-tue-khong-tu#chap-${chapIdx + 1}`;
        continueBox.style.display = 'flex';
      }
    } catch (e) {}
  }

  // 3. Render Books Grid
  function renderBooks() {
    let filtered = catalog;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(b => b.categorySlug === currentCategory);
    }

    if (searchTerm.trim()) {
      const q = removeDiacritics(searchTerm.toLowerCase().trim());
      filtered = filtered.filter(b => {
        const titleMatch = removeDiacritics(b.title.toLowerCase()).includes(q);
        const authorMatch = removeDiacritics(b.author.toLowerCase()).includes(q);
        const descMatch = removeDiacritics(b.shortDesc.toLowerCase()).includes(q);
        const catMatch = removeDiacritics(b.category.toLowerCase()).includes(q);
        return titleMatch || authorMatch || descMatch || catMatch;
      });
    }

    if (filtered.length === 0) {
      booksGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <div style="font-size: 2.4rem; margin-bottom: 8px;">📚</div>
          <h3>Không tìm thấy cuốn sách nào</h3>
          <p style="font-size: 0.9rem;">Thử tìm kiếm với từ khóa khác hoặc chuyển sang danh mục khác.</p>
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(book => {
      const isReady = book.status === 'ready';
      const readUrl = `reader.html?book=${book.id}`;
      const tagClass = isReady ? 'ready' : 'ready-soon';

      html += `
        <article class="book-card">
          <div class="card-top">
            <div class="card-cover ${escapeHtml(book.coverTheme)}">
              <span class="cover-badge">${escapeHtml(book.coverBadge)}</span>
              <span class="cover-mini-text">${escapeHtml(book.title)}</span>
            </div>
            
            <div class="card-header-info">
              <span class="card-tag ${tagClass}">${escapeHtml(book.tag)}</span>
              <h3 class="card-title">${escapeHtml(book.title)}</h3>
              <p class="card-author">${escapeHtml(book.author)}</p>
            </div>
          </div>

          <p class="card-desc">${escapeHtml(book.shortDesc)}</p>

          <div class="card-highlights">
            ${book.highlights.map(h => `<div class="highlight-item">${escapeHtml(h)}</div>`).join('')}
          </div>

          ${
            isReady
              ? `<a href="${readUrl}" class="btn-card-read">
                   <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                   </svg>
                   <span>Đọc trực tuyến (${book.totalChapters} chương)</span>
                 </a>`
              : `<button class="btn-card-secondary" onclick="alert('Cuốn sách: \\'${escapeHtml(book.title)}\\' hiện đang được số hóa các chương tiếp theo. Bản PDF gốc đã có trong tủ sách máy tính của bạn.')">
                   <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                     <circle cx="12" cy="12" r="10"></circle>
                     <line x1="12" y1="8" x2="12" y2="12"></line>
                     <line x1="12" y1="16" x2="12.01" y2="16"></line>
                   </svg>
                   <span>Sắp cập nhật bản đọc Web</span>
                 </button>`
          }
        </article>
      `;
    });

    booksGrid.innerHTML = html;
  }

  // 4. Category Tabs Event
  if (catTabsContainer) {
    catTabsContainer.querySelectorAll('.cat-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        catTabsContainer.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderBooks();
      });
    });
  }

  // Footer Filter Links
  document.querySelectorAll('[data-filter-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const slug = link.getAttribute('data-filter-link');
      currentCategory = slug;
      if (catTabsContainer) {
        catTabsContainer.querySelectorAll('.cat-pill').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === slug);
        });
      }
      renderBooks();
      window.scrollTo({ top: document.querySelector('.shelf-section').offsetTop - 80, behavior: 'smooth' });
    });
  });

  // 5. Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderBooks();
    });
  }

  // 6. Helpers
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

  // Initial load
  checkContinueReading();
  renderBooks();
})();
