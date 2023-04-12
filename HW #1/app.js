const emailDiv = document.getElementById('email-div');
const passwordDiv = document.getElementById('password-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');

const emailInput = document.getElementById('mail-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');

const emailButton = document.getElementById('mail-button');
const passwordButton = document.getElementById('password-button');
const passwordShowButton = document.getElementById('password-show-button');
const confirmPasswordButton = document.getElementById('confirm-password-button');
const confirmButtonShow = document.getElementById('confirm-button-show')

emailButton.addEventListener('click', () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(emailInput.value);

  if (isValidEmail) {
    emailDiv.style.display = 'none';
    passwordDiv.style.display = 'block';
  } else {
    alert('Введите корректную электронную почту!');
  }
});

passwordShowButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordShowButton.textContent = 'Скрыть пароль';
  } else {
    passwordInput.type = 'password';
    passwordShowButton.textContent = 'Показать пароль';
  }
});

confirmButtonShow.addEventListener('click', () => {
  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text';
    confirmButtonShow.textContent = 'Скрыть пароль';
  } else {
    confirmPasswordInput.type = 'password';
    confirmButtonShow.textContent = 'Показать пароль';
  }
});

passwordButton.addEventListener('click', () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isValidPassword = passwordRegex.test(passwordInput.value);

  if (isValidPassword) {
    passwordDiv.style.display = 'none';
    confirmPasswordDiv.style.display = 'block';
  } else {
    alert('Пароль должен содержать не менее 8 символов, цифры, буквы в верхнем и нижнем регистрах.');
  }
});

confirmPasswordButton.addEventListener('click', () => {
  if (passwordInput.value === confirmPasswordInput.value) {
    alert('Пароли совпадают, спасибо!');
  } else {
    alert('Пароли не совпадают!');
  }
});
