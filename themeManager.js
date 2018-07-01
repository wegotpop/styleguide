function getTheme() {
  return JSON.parse(localStorage.getItem('theme')) || {};
}

export function resetTheme() {
  const theme = getTheme();
  Object.keys(theme).forEach(key => {
    updateCSSValue(key, '');
  });
  localStorage.setItem('theme', '{}');
  window.location.reload();
}

export function saveValue(name, value) {
  const theme = getTheme();

  theme[name] = value;
  localStorage.setItem('theme', JSON.stringify(theme));
}

export function loadCSSFromTheme() {
  const theme = getTheme();
  Object.keys(theme).forEach(key => {
    updateCSSValue(key, theme[key]);
  });
}

export function updateCSSValue(name, value) {
  document.querySelector(':root').style.setProperty(`--${name}`, value);
}

export function themeActive() {
  const theme = getTheme();
  return Object.keys(theme).length !== 0;
}
