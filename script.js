// Код для вашого головного скрипта:
let currentLang = localStorage.getItem('portfolio-lang') || 'ua';

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'ua' ? 'EN' : 'UA';
    }
}

// Запускаємо переклад при завантаженні сторінки
changeLanguage(currentLang);

// Вішаємо клік на кнопку перемикання
const langToggleElement = document.getElementById('lang-toggle');
if (langToggleElement) {
    langToggleElement.addEventListener('click', () => {
        currentLang = currentLang === 'ua' ? 'en' : 'ua';
        localStorage.setItem('portfolio-lang', currentLang);
        changeLanguage(currentLang);
    });
}