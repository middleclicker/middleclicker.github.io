(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const updateThemeButton = () => {
    const evening = root.dataset.theme === 'evening';
    const label = evening ? 'Switch to daylight colors' : 'Switch to evening colors';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    themeColor?.setAttribute('content', evening ? '#222b25' : '#f6f3eb');
  };

  if (themeButton) {
    themeButton.hidden = false;
    updateThemeButton();
    themeButton.addEventListener('click', () => {
      const theme = root.dataset.theme === 'evening' ? 'daylight' : 'evening';
      root.dataset.theme = theme;
      try {
        localStorage.setItem('middleclicker-theme', theme);
      } catch (_) {}
      updateThemeButton();
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
