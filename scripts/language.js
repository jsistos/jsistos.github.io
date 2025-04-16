
function setLanguage(lang) {
  fetch('../translations/translations.json')  // Path to JSON updated
    .then(response => response.json())
    .then(data => {
      document.querySelector('[data-i18n="welcome"]').textContent = data[lang].welcome;
    });
}