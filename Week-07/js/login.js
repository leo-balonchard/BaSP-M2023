var emailInput = document.getElementById('email');
var emailError = document.getElementById('email-error');
var removeMessage = document.getElementById('message-default');
var emailSuccess = document.getElementById('email-success');
var passwordInput = document.getElementById('password');
var passwordError = document.getElementById('password-error');
var removePassword = document.getElementById('password-default');
var passwordSuccess = document.getElementById('password-success');
var submitButton = document.getElementById('login-button');
var url = 'https://api-rest-server.vercel.app/login';


function validateEmail() {
  var emailValue = emailInput.value.trim();
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  if (!emailExpression.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    emailError.style.color = 'red';
    removeMessage.style.display = 'none';
    emailSuccess.style.display = 'none';
    return false;
  }
  emailError.style.display = 'none';
  removeMessage.style.display = 'none';
  emailSuccess.style.display = 'block';
  return true;
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function() {
  emailError.style.display = 'none';
  emailSuccess.style.display = 'none';
  removeMessage.style.display = 'block';
});

function validatePassword() {
  var passwordValue = passwordInput.value.trim();
  var hasLetter = false;
  var hasNumber = false;
  var hasSpecialCharacter = false;
  var length = passwordValue.length;

  for (var i = 0; i < length; i++) {
    var charCode = passwordValue.charCodeAt(i);
    if ((charCode >= 48 && charCode <= 57)) {
      hasNumber = true;
    } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      hasLetter = true;
    } else {
      hasSpecialCharacter = true;
    }
  }
  if (length < 8 || !hasLetter || !hasNumber || hasSpecialCharacter) {
    passwordError.textContent = (length < 8 || hasSpecialCharacter) ?
      'Please enter a valid password (minimum 8 characters, letters and numbers only).' :
      'Please enter a valid password (minimum 8 characters, must include at least one letter and one number).';
    passwordError.style.display = 'block';
    passwordError.style.color = 'red';
    removePassword.style.display = 'none';
    passwordSuccess.style.display = 'none';
    return false;
  }
  passwordError.style.display = 'none';
  removePassword.style.display = 'none';
  passwordSuccess.style.display = 'block';
  return true;
}

passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('focus', function() {
  passwordError.style.display = 'none';
  passwordSuccess.style.display = 'none';
  removePassword.style.display = 'block';
});

submitButton.addEventListener('click', function() {
  event.preventDefault();
  var emailIsValid = validateEmail();
  var passwordIsValid = validatePassword();

  if (emailIsValid && passwordIsValid) {
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();
    url += '?email=' + emailValue + '&password=' + passwordValue;

    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Error de Autenticacion');
        }
        return response.json();
      })
      .then(function(data) {
        alert('La solicitud se realizo correctamente.\n' + 'Respuesta de API: ' + JSON.stringify(data.msg));
      })
      .catch(function(error) {
        alert('Hubo un error.\n' + 'Respuesta de API: ' + error.message);
      });
  } else {
    var errorMessage = '';
    if (!emailIsValid) {
      errorMessage += 'Please enter a valid email address.\n';
    }
    if (!passwordIsValid) {
      errorMessage += 'Please enter a valid password.\n';
    }
    alert(errorMessage);
  }
});
