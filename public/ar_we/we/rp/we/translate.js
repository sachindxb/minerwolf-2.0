// language-handler.js

const translations = {
  en: {
    accountRecoveryTitle: "Account Recovery",
    wrongEmailError: "The email you entered is wrong. Please check it and try again.",
    emailPlaceholder: "Email",
    getOneTimePin: "Get One Time PIN",
    pinInfo: "We’ll send you a 6-digit PIN to this email. Make sure to also check your junk folder.",
    cancel: "Cancel",
    footerPowered: "Powered by MinerWolf Foundation",
    footerCopyright: "Copyright © 2025 | All Rights Reserved",
    legal: "LEGAL",
  },
  gr: {
    accountRecoveryTitle: "Ανάκτηση Λογαριασμού",
    wrongEmailError: "Το email που εισαγάγατε είναι λάθος. Ελέγξτε το και προσπαθήστε ξανά.",
    emailPlaceholder: "Email",
    getOneTimePin: "Λάβετε PIN Μίας Χρήσης",
    pinInfo: "Θα σας στείλουμε ένα 6-ψήφιο PIN σε αυτό το email. Ελέγξτε επίσης τον φάκελο ανεπιθύμητης αλληλογραφίας.",
    cancel: "Ακύρωση",
    footerPowered: "Υποστηρίζεται από το MinerWolf Foundation",
    footerCopyright: "Copyright © 2025 | Όλα τα δικαιώματα διατηρούνται",
    legal: "ΝΟΜΙΚΑ",
  }
};

function switchLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);

  document.querySelectorAll('[data-translate]').forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  const desktopFlag = document.getElementById('language-flag-desktop');
  const mobileFlag = document.getElementById('language-flag-mobile');

  if (desktopFlag) {
    desktopFlag.src = lang === 'en'
      ? 'uploads/usa-flag.png'
      : 'uploads/greek-flag.png';
    desktopFlag.srcset = lang === 'en'
      ? 'uploads/usa-flag.png 512w, uploads/usa-flag.png 300w, uploads/usa-flag.png 150w'
      : 'uploads/greek-flag.png 512w, uploads/greek-flag-300x300.png 300w, uploads/greek-flag-150x150.png 150w';
  }

  if (mobileFlag) {
    mobileFlag.src = lang === 'en'
      ? 'uploads/usa-flag.png'
      : 'uploads/greek-flag.png';
    mobileFlag.srcset = lang === 'en'
      ? 'uploads/usa-flag.png 512w, uploads/usa-flag.png 300w, uploads/usa-flag.png 150w'
      : 'uploads/greek-flag.png 512w, uploads/greek-flag-300x300.png 300w, uploads/greek-flag-150x150.png 150w';
  }
}

// ✅ On page load: load saved language or default to English
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  switchLanguage(savedLang);

  // Create and add dropdown
  const langDropdown = `
    <div id="lang-dropdown" class="lang-dropdown" style="display: none; position: absolute; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.2); border-radius: 4px; z-index: 1000;">
      <div class="lang-option" data-lang="en" style="padding: 10px; cursor: pointer; display: flex; align-items: center;">
        <img src="uploads/usa-flag.png" style="width: 20px; margin-right: 8px;">English
      </div>
      <div class="lang-option" data-lang="gr" style="padding: 10px; cursor: pointer; display: flex; align-items: center;">
        <img src="uploads/greek-flag.png" style="width: 20px; margin-right: 8px;">Greek
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', langDropdown);

  document.querySelectorAll('img[alt="Switch to Greek"], img[alt="Switch to Greek Mobile"]').forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dropdown = document.getElementById('lang-dropdown');
      const flagPos = e.target.getBoundingClientRect();
      const isMobile = e.target.alt === "Switch to Greek Mobile";

      if (isMobile) {
        dropdown.style.bottom = `${window.innerHeight - flagPos.top + 10}px`;
        dropdown.style.top = 'auto';
      } else {
        dropdown.style.top = `${flagPos.bottom + window.scrollY}px`;
        dropdown.style.bottom = 'auto';
      }
      dropdown.style.left = `${flagPos.left}px`;
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });
  });

  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      switchLanguage(lang);
      document.getElementById('lang-dropdown').style.display = 'none';
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#lang-dropdown')) {
      document.getElementById('lang-dropdown').style.display = 'none';
    }
  });
});
