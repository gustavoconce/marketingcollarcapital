const phoneInput = document.getElementById('phoneInput');

if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
  });
}

function closeCookie() {
  document.getElementById('cookieBanner').style.display = 'none';
}
