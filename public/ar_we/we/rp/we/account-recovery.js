// account-recovery.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.elementor-form');
  const emailInput = document.querySelector('#form-field-recover_email_wrong');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent normal form submit

    // Clear any previous error message
    let existingError = document.querySelector('.validation-error');
    if (existingError) {
      existingError.remove();
    }

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      showError('Please enter your email address.');
    } else if (!emailRegex.test(emailValue)) {
      showError('Please enter a valid email address.');
    } else {
      // ✅ All good - simulate success by redirecting to Step 2
      window.location.href = 'https://uiux-auth-wolf.onlinetraining.info/navigator/account-recovery-page-2nd-step/';
    }
  });

  function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('validation-error');
    errorElement.style.color = 'red';
    errorElement.style.marginTop = '10px';
    errorElement.textContent = message;

    // Add error message below the email input
    const parent = emailInput.closest('.elementor-field-group');
    parent.appendChild(errorElement);
  }
});
