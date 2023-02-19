const form = document.getElementById('registro-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nombreError = document.getElementById('nombre-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

form.addEventListener('submit', (event) => {
  // Verificar si el nombre está vacío
  if (nombreInput.value.trim() === '') {
    event.preventDefault();
    nombreError.textContent = 'Por favor ingrese su nombre';
    nombreError.style.color = 'red';
  } else {
    nombreError.textContent = '';
  }

  // Verificar si el correo electrónico es válido
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
    event.preventDefault();
    emailError.textContent = 'Por favor ingrese un correo electrónico válido';
    emailError.style.color = 'red';
  } else {
    emailError.textContent = '';
  }

  // Verificar si la contraseña tiene al menos 8 caracteres
  if (passwordInput.value.length < 8) {
    event.preventDefault();
    passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
    passwordError.style.color = 'red';
  } else {
    passwordError.textContent = '';
  }

  // Verificar si la confirmación de contraseña coincide con la contraseña
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    confirmPasswordError.textContent = 'Las contraseñas no coinciden';
    confirmPasswordError.style.color = 'red';
  } else {
    confirmPasswordError.textContent = '';
  }
});

// Cambiar el color del mensaje de error a verde cuando se ingresa una entrada válida
nombreInput.addEventListener('input', () => {
  if (nombreInput.value.trim() !== '') {
    nombreError.textContent = 'Entrada válida';
    nombreError.style.color = 'green';
  }
});

emailInput.addEventListener('input', () => {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
    emailError.textContent = 'Entrada válida';
    emailError.style.color = 'green';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length >= 8) {
    passwordError.textContent = 'Entrada válida';
    passwordError.style.color = 'green';
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordError.textContent = 'Entrada válida';
    confirmPasswordError.style.color = 'green';
  }
});
