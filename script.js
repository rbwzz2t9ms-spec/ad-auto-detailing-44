document.getElementById('year').textContent = new Date().getFullYear();
let currentLang = 'fr';
const toggle = document.getElementById('langToggle');
toggle.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'ru' : 'fr';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-fr][data-ru]').forEach(el => {
    const value = el.dataset[currentLang];
    if (value.includes('<em>')) el.innerHTML = value;
    else el.textContent = value;
  });
  toggle.textContent = currentLang === 'fr' ? 'FR / RU' : 'RU / FR';
});
