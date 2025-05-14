const translations = {
  en: {
    signUp: "Sign Up",
    signIn: "Sign In",
    join: "Join",
    ourTeamNow: "our team now!",
    joinWith: "Join our cloud mining to get crypto rewards with",
    experience: "Experience effortless and risk-free rewards with our algorithmic cloud mining service. Sign up to learn how you can start getting your rewards today.",
    getStarted: "Get Started",
    whatIs: "What is",
    minerwolf: "MinerWolf",
    is: "Is",
    safe: "safe?",
    howDo: "How do",
    iGetStarted: "I get started?",
    features: "Features",
    minerwolfPossessive: "MinerWolf's",
    today: "Today!",
    discoverPower: "Discover the Power of MinerWolf!",
    referralTitle: "Referral System",
    referralDesc: "Unlock greater earnings potential with MinerWolf's innovative referral system.",
    mobileTitle: "Mobile App",
    mobileDesc: "Stay connected and in control of your rewards with the MinerWolf mobile app.",
    miningTitle: "24/7 Algorithmic Cloud Mining",
    miningDesc: "Experience the convenience of MinerWolf's automated cloud mining service.",
    supportTitle: "Expert Support",
    supportDesc: "Whether you’re unsure which package to choose or facing any difficulties.",
    emailPlaceholder: "Enter your email",
    whatIsDesc1: "MinerWolf is an online platform on which you can buy algorithmic cloud mining contracts and get your rewards.",
    whatIsDesc2: "MinerWolf’s cloud mining is backed by algorithmic trading and allows you to mine cryptocurrencies without owning any mining equipment yourself.",
    isSafeDesc1: "Yes, our platform uses advanced security measures to ensure your rewards and data are protected.",
    isSafeDesc2: "MinerWolf’s cloud mining service is backed by sophisticated, algorithmic trading systems.",
    howStartDesc1: "Simply sign up with your email to receive more information and choose a mining plan that fits your needs.",
    howStartDesc2: "After signing up, you’ll be able to browse through our range of mining plans and select the one that fits you best.",
    joinTodayDesc: "Take advantage of our powerful features and start earning with MinerWolf.",
    legal: "LEGAL",
    footer1: "Powered by MinerWolf Foundation",
    footer2: "Copyright © 2025 | All Rights Reserved",
  },
  gr: {
    signUp: "Εγγραφή",
    signIn: "Σύνδεση",
    join: "Συμμετοχή",
    ourTeamNow: "στην ομάδα μας τώρα!",
    joinWith: "Συμμετοχή στο cloud mining για να κερδίσετε crypto με",
    experience: "Απολαύστε αβίαστες και χωρίς ρίσκο ανταμοιβές με την αλγοριθμική υπηρεσία εξόρυξης cloud.",
    getStarted: "Ξεκινήστε",
    whatIs: "Τι είναι",
    minerwolf: "MinerWolf",
    is: "Είναι",
    safe: "ασφαλές;",
    howDo: "Πώς να",
    iGetStarted: "Ξεκινήσω;",
    features: "Χαρακτηριστικά",
    minerwolfPossessive: "του MinerWolf",
    today: "Σήμερα!",
    discoverPower: "Ανακαλύψτε τη δύναμη του MinerWolf!",
    referralTitle: "Σύστημα Παραπομπών",
    referralDesc: "Αποκτήστε υψηλότερα κέρδη με το καινοτόμο σύστημα παραπομπών.",
    mobileTitle: "Εφαρμογή για κινητά",
    mobileDesc: "Μείνετε συνδεδεμένοι και ελέγξτε τις ανταμοιβές σας οποιαδήποτε στιγμή.",
    miningTitle: "24/7 Αλγοριθμικό Cloud Mining",
    miningDesc: "Αυτόματη λειτουργία mining όλο το 24ωρο με προηγμένους αλγορίθμους.",
    supportTitle: "Υποστήριξη από Ειδικούς",
    supportDesc: "Είμαστε πάντα εδώ για να σας βοηθήσουμε με όποια απορία έχετε.",
    emailPlaceholder: "Εισάγετε το email σας",
    whatIsDesc1: "Το MinerWolf είναι μια διαδικτυακή πλατφόρμα για αγορά cloud mining συμβολαίων.",
    whatIsDesc2: "Το cloud mining του MinerWolf βασίζεται σε αλγοριθμικές συναλλαγές.",
    isSafeDesc1: "Ναι, χρησιμοποιούμε προηγμένα μέτρα ασφαλείας για την προστασία των δεδομένων σας.",
    isSafeDesc2: "Οι αλγόριθμοι λειτουργούν αυτόματα για να μεγιστοποιούν τα κέρδη σας.",
    howStartDesc1: "Απλώς εγγραφείτε με το email σας για να λάβετε περισσότερες πληροφορίες.",
    howStartDesc2: "Μετά την εγγραφή, μπορείτε να δείτε όλα τα πλάνα mining που διαθέτουμε.",
    joinTodayDesc: "Εκμεταλλευτείτε τα δυνατά χαρακτηριστικά του MinerWolf και ξεκινήστε να κερδίζετε.",
    legal: "ΝΟΜΙΚΑ",
    footer1: "Υποστηρίζεται από το MinerWolf Foundation",
    footer2: "Copyright © 2025 | Όλα τα δικαιώματα διατηρούνται",
  }
};


function switchLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);

  document.querySelectorAll('[data-translate]').forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (typeof el.placeholder !== 'undefined' && el.placeholder) {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // ✅ Update both flags
  const desktopFlag = document.getElementById('language-flag-desktop');
  const mobileFlag = document.getElementById('language-flag-mobile');

  if (desktopFlag) {
    desktopFlag.src = lang === 'en'
      ? 'landing_page_photos/usa-flag.png'
      : 'landing_page_photos/greek-flag.png';
    desktopFlag.srcset = lang === 'en'
      ? 'landing_page_photos/usa-flag.png 512w, landing_page_photos/usa-flag-300x300.png 300w, landing_page_photos/usa-flag-150x150.png 150w'
      : 'landing_page_photos/greek-flag.png 512w, landing_page_photos/greek-flag-300w, landing_page_photos/greek-flag-150w';
  }

  if (mobileFlag) {
    mobileFlag.src = lang === 'en'
      ? 'landing_page_photos/usa-flag.png'
      : 'landing_page_photos/greek-flag.png';
    mobileFlag.srcset = lang === 'en'
      ? 'landing_page_photos/usa-flag.png 512w, landing_page_photos/usa-flag-300x300.png 300w, landing_page_photos/usa-flag-150x150.png 150w'
      : 'landing_page_photos/greek-flag.png 512w, landing_page_photos/greek-flag-300w, landing_page_photos/greek-flag-150w';
  }
}


// ✅ When page loads, restore language
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  switchLanguage(savedLang);
});
