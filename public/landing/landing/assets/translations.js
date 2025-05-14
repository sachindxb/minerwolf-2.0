const translations = {
    en: {
      signUp: "Sign Up",
      signIn: "Sign In",
      joinWith: "Join our cloud mining to get crypto rewards with",
      experience: "Experience effortless and risk-free rewards with our algorithmic cloud mining service. Sign up to learn how you can start getting your rewards today.",
      joinNow: "Join our team now!",
      getStarted: "Get Started",
      whatIs: "What is MinerWolf?",
      whatIsDesc1: "MinerWolf is an online platform on which you can buy algorithmic cloud mining contracts and get your rewards.",
      whatIsDesc2: "MinerWolf’s cloud mining is backed by algorithmic trading and allows you to mine cryptocurrencies without owning any mining equipment yourself. We handle all the technical aspects, and you receive the rewards.",
      isSafe: "Is MinerWolf safe?",
      isSafeDesc1: "Yes, our platform uses advanced security measures to ensure your rewards and data are protected.",
      isSafeDesc2: "MinerWolf’s cloud mining service is backed by sophisticated, algorithmic trading systems...",
      howStart: "How do I get started?",
      howStartDesc1: "Simply sign up with your email to receive more information and choose a mining plan that fits your needs.",
      howStartDesc2: "After signing up, you’ll be able to browse through our range of mining plans and select the one that fits you best.",
      joinToday: "Join MinerWolf Today!",
      joinTodayDesc: "Take advantage of our powerful features and start earning with MinerWolf...",
      emailPlaceholder: "Enter your email",
      referralTitle: "Referral System",
      referralDesc: "Unlock greater earnings potential with MinerWolf's innovative referral system...",
      mobileTitle: "Mobile App",
      mobileDesc: "Stay connected and in control of your rewards with the MinerWolf mobile app...",
      miningTitle: "24/7 Algorithmic Cloud Mining",
      miningDesc: "Experience the convenience of MinerWolf's automated cloud mining service...",
      supportTitle: "Expert Support",
      supportDesc: "Whether you’re unsure which package to choose or facing any difficulties...",
      footer1: "Powered by MinerWolf Foundation",
      footer2: "Copyright © 2025 | All Rights Reserved",
    },
    gr: {
      signUp: "Εγγραφή",
      signIn: "Σύνδεση",
      joinWith: "Συμμετοχή στο cloud mining για να κερδίσετε crypto με",
      experience: "Απολαύστε εύκολες και ασφαλείς ανταμοιβές με την υπηρεσία μας...",
      joinNow: "Γίνε μέλος της ομάδας μας τώρα!",
      getStarted: "Ξεκινήστε",
      whatIs: "Τι είναι το MinerWolf;",
      whatIsDesc1: "Το MinerWolf είναι μια διαδικτυακή πλατφόρμα για αγορά cloud mining συμβολαίων...",
      whatIsDesc2: "Το cloud mining του MinerWolf βασίζεται σε αλγοριθμικές συναλλαγές...",
      isSafe: "Είναι ασφαλές το MinerWolf;",
      isSafeDesc1: "Ναι, χρησιμοποιούμε προηγμένα μέτρα ασφαλείας για την προστασία των δεδομένων σας.",
      isSafeDesc2: "Οι αλγόριθμοι λειτουργούν αυτόματα για να μεγιστοποιούν τα κέρδη σας...",
      howStart: "Πώς ξεκινώ;",
      howStartDesc1: "Απλώς εγγραφείτε με το email σας για να λάβετε περισσότερες πληροφορίες.",
      howStartDesc2: "Μετά την εγγραφή, μπορείτε να δείτε όλα τα πλάνα mining που διαθέτουμε...",
      joinToday: "Γίνε μέλος σήμερα!",
      joinTodayDesc: "Εκμεταλλευτείτε τα δυνατά χαρακτηριστικά του MinerWolf και ξεκινήστε να κερδίζετε...",
      emailPlaceholder: "Εισάγετε το email σας",
      referralTitle: "Σύστημα Παραπομπών",
      referralDesc: "Αποκτήστε υψηλότερα κέρδη με το καινοτόμο σύστημα παραπομπών...",
      mobileTitle: "Εφαρμογή για κινητά",
      mobileDesc: "Μείνετε συνδεδεμένοι και ελέγξτε τις ανταμοιβές σας οποιαδήποτε στιγμή...",
      miningTitle: "24/7 Αλγοριθμικό Cloud Mining",
      miningDesc: "Αυτόματη λειτουργία mining όλο το 24ωρο με προηγμένους αλγόριθμους...",
      supportTitle: "Υποστήριξη από Ειδικούς",
      supportDesc: "Είμαστε πάντα εδώ για να σας βοηθήσουμε με όποια απορία έχετε...",
      footer1: "Υποστηρίζεται από το MinerWolf Foundation",
      footer2: "Copyright © 2025 | Όλα τα δικαιώματα διατηρούνται",
    },
  };
  
  function switchLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach((el) => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        if (el.placeholder !== undefined) {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
  }
  