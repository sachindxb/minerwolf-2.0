// language-handler.js


const translations = {
  en: {
    signUpTitle: "Sign Up",
    emailPlaceholder: "Email",
    joinNowButton: "Join Now",
    pinInfoText: "We'll send you a 6-digit PIN to this email.<br>Make sure to also check your junk folder.",
    alreadyMemberText: "Already a member?",
    signInNowButton: "Sign In Now!",
    emailAlreadyExists: "There’s already an account with this email.<br>Please check it and try again, or sign in instead.<br><br>",
    legal: "LEGAL",
    footerPowered: "Powered by MinerWolf Foundation",
    footerCopyright: "Copyright © 2024 | All Rights Reserved",
    pageTitle: "Sign Up Page – MinerWolf"
  },
  gr: {
    signUpTitle: "Εγγραφή",
    emailPlaceholder: "Email",
    joinNowButton: "Εγγραφή τώρα",
    pinInfoText: "Θα σας στείλουμε έναν 6-ψήφιο κωδικό PIN σε αυτό το email.<br>Ελέγξτε επίσης τον φάκελο ανεπιθύμητης αλληλογραφίας.",
    alreadyMemberText: "Ήδη μέλος;",
    signInNowButton: "Σύνδεση τώρα!",
    emailAlreadyExists: "Υπάρχει ήδη ένας λογαριασμός με αυτό το email.<br>Ελέγξτε το και προσπαθήστε ξανά ή συνδεθείτε εναλλακτικά.<br><br>",
    legal: "ΝΟΜΙΚΑ",
    footerPowered: "Υποστηρίζεται από το MinerWolf Foundation",
    footerCopyright: "Copyright © 2024 | Όλα τα δικαιώματα διατηρούνται",
    pageTitle: "Σελίδα Εγγραφής – MinerWolf"
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

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  switchLanguage(savedLang);

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
      const flagRect = e.target.getBoundingClientRect();
      const isMobile = e.target.alt === "Switch to Greek Mobile";

      // Toggle
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        return;
      }

      dropdown.style.display = 'block';

      if (isMobile) {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        dropdown.style.position = 'absolute';
        dropdown.style.top = `${scrollY + flagRect.top - dropdown.offsetHeight - 8}px`;
        dropdown.style.left = `${flagRect.left}px`;
      } else {
        const dropdownWidth = dropdown.offsetWidth;
        const flagCenter = flagRect.left + (flagRect.width / 2);
        dropdown.style.top = `${window.scrollY + flagRect.bottom + 8}px`;
        dropdown.style.left = `${flagCenter - dropdownWidth / 2}px`;
      }

      dropdown.style.bottom = 'auto';
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
