// ============ 主题切换 ============
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function getPreferredTheme() {
  const saved = localStorage.getItem('liujialei-theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('liujialei-theme', theme);
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ============ 移动端导航 ============
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

// 点击链接后关闭菜单
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ 导航滚动样式 ============
const header = document.getElementById('site-header');
function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 10);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============ 滚动入场动画 ============
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ============ 数字计数动画 ============
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ============ 关于我 · 折叠阅读 ============
const aboutBody = document.getElementById('about-body');
const aboutMore = document.getElementById('about-more');

if (aboutBody && aboutMore) {
  // 内容足够长时才显示“阅读全文”按钮
  if (aboutBody.scrollHeight > 320) {
    aboutMore.hidden = false;
    aboutBody.classList.add('collapsed');
  }

  aboutMore.addEventListener('click', () => {
    const isCollapsed = aboutBody.classList.toggle('collapsed');
    aboutMore.textContent = isCollapsed ? '阅读全文 ↓' : '收起 ↑';
  });
}

// ============ 页脚年份 ============
document.getElementById('year').textContent = new Date().getFullYear();
