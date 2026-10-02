(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const updateThemeButton = () => {
    const dimmed = root.dataset.theme === 'embers';
    const label = dimmed ? 'Bring up the firelight' : 'Dim the lights';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    themeButton.querySelector('.theme-label').textContent = dimmed ? 'Firelight' : 'Dim lights';
    themeColor?.setAttribute('content', dimmed ? '#120e0c' : '#1b1410');
  };

  if (themeButton) {
    themeButton.hidden = false;
    updateThemeButton();
    themeButton.addEventListener('click', () => {
      const theme = root.dataset.theme === 'embers' ? 'firelight' : 'embers';
      root.dataset.theme = theme;
      try {
        localStorage.setItem('middleclicker-hearth', theme);
      } catch (_) {}
      updateThemeButton();
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
