document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.elementor-countdown-wrapper');
  const expireMessage = document.querySelector('.elementor-countdown-expire--message');
  const pinInput = document.getElementById("form-field-recovery_pin_wrong");

  if (!wrapper) return;

  const minutesEl = wrapper.querySelector('.elementor-countdown-minutes');
  const secondsEl = wrapper.querySelector('.elementor-countdown-seconds');

  let timeLeft = 300; // 5 minutes in seconds

  const updateCountdown = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    if (timeLeft <= 0) {
      wrapper.style.display = 'none';
      if (expireMessage) expireMessage.style.display = 'block';

      const pin = pinInput?.value?.trim() || "";

      if (pin === "123456") {
        window.location.href = "https://cloud-miner.vercel.app/members/MyDashboard";
      } else {
        window.location.href = "https://uiux-auth-wolf.onlinetraining.info/navigator/sign-up-page/wrong-pin/";
      }

      return;
    }

    timeLeft--;
    setTimeout(updateCountdown, 1000);
  };

  updateCountdown();
});
