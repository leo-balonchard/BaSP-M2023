var nameInput = document.getElementById('name');
var nameError = document.getElementById('name-error');
var removeMessageName = document.getElementById('message-default-name');
var nameSuccess = document.getElementById('name-success');
var lastnameInput = document.getElementById('lastname');
var lastnameError = document.getElementById('lastname-error');
var removeMessageLastname = document.getElementById('message-default-lastname');
var lastnameSuccess = document.getElementById('lastname-success');
var idInput = document.getElementById('id-number');
var idError = document.getElementById('id-error');
var removeMessageId = document.getElementById('message-default-id');
var idSuccess = document.getElementById('id-success');
var dateInput = document.getElementById('date');
var dateError = document.getElementById('date-error');
var removeMessageDate = document.getElementById('message-default-date');
var dateSuccess = document.getElementById('date-success');
var phoneInput = document.getElementById('phone');
var phoneError = document.getElementById('phone-error');
var removeMessagePhone = document.getElementById('message-default-phone');
var phoneSuccess = document.getElementById('phone-success');
var addressInput = document.getElementById('address');
var addressError = document.getElementById('address-error');
var removeMessageAddress = document.getElementById('message-default-address');
var addressSuccess = document.getElementById('address-success');
var cityInput = document.getElementById('city');
var cityError = document.getElementById('city-error');
var removeMessageCity = document.getElementById('message-default-city');
var citySuccess = document.getElementById('city-success');
var codeInput = document.getElementById('code');
var codeError = document.getElementById('code-error');
var removeMessageCode = document.getElementById('message-default-code');
var codeSuccess = document.getElementById('code-success');
var emailInput = document.getElementById('email');
var emailError = document.getElementById('email-error');
var removeMessageEmail = document.getElementById('message-default-email');
var emailSuccess = document.getElementById('email-success');
var passwordInput = document.getElementById('password');
var passwordError = document.getElementById('password-error');
var removeMessagePassword = document.getElementById('message-default-password');
var passwordSuccess = document.getElementById('password-success');
var confirmInput = document.getElementById('confirm-password');
var confirmError = document.getElementById('confirm-error');
var removeMessageConfirm = document.getElementById('message-default-confirm');
var confirmSuccess = document.getElementById('confirm-success');
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphanumeric = 'abcdefghijklmnñopqrstuvwxyz0123456789';
var lettersAndNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1',
'2', '3', '4', '5', '6', '7', '8', '9'];
var allowedChars = alphanumeric + ' ';
var submitButton = document.getElementById('register-btn');


function validateName() {
  var nameValue = nameInput.value.trim().toLowerCase();
  var validName = true;

  if (nameValue.length < 3) {
    nameError.textContent = 'Please enter a valid name (minimum 3 characters).';
    validName = false;
  } else {
    for (var i = 0; i < nameValue.length; i++) {
      if (letters.indexOf(nameValue[i]) === -1) {
        nameError.textContent = 'Please enter a valid name (only letters allowed).';
        validName = false;
        break;
      }
    }
  }

  if (validName) {
    nameError.style.display = 'none';
    removeMessageName.style.display = 'none';
    nameSuccess.style.display = 'block';
    return true;
  } else {
    nameError.style.display = 'block';
    nameError.style.color = 'red';
    removeMessageName.style.display = 'none';
    nameSuccess.style.display = 'none';
    return false;
  }
}

nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('focus', function() {
  nameError.style.display = 'none';
  removeMessageName.style.display = 'block';
});

function validateLastname() {
  var lastnameValue = lastnameInput.value.trim().toLowerCase();
  var validLastname = true;

  if (lastnameValue.length < 3) {
    lastnameError.textContent = 'Please enter a valid lastname (minimum 3 characters).';
    validLastname = false;
  } else {
    for (var i = 0; i < lastnameValue.length; i++) {
      if (letters.indexOf(lastnameValue[i]) === -1) {
        lastnameError.textContent = 'Please enter a valid lastname (only letters allowed).';
        validLastname = false;
        break;
      }
    }
  }

  if (validLastname) {
    lastnameError.style.display = 'none';
    removeMessageLastname.style.display = 'none';
    lastnameSuccess.style.display = 'block';
    return true;
  } else {
    lastnameError.style.display = 'block';
    lastnameError.style.color = 'red';
    removeMessageLastname.style.display = 'none';
    lastnameSuccess.style.display = 'none';
    return false;
  }
}

lastnameInput.addEventListener('blur', validateLastname);
lastnameInput.addEventListener('focus', function() {
  lastnameError.style.display = 'none';
  removeMessageLastname.style.display = 'block';
});

function validateId() {
  var idValue = idInput.value.trim();
  var validId = true;

  if (idValue.length < 7) {
    idError.textContent = 'Please enter a valid ID number (7 or more digits).';
    validId = false;
  } else {
    for (var i = 0; i < idValue.length; i++) {
      if (numbers.indexOf(idValue[i]) === -1) {
        idError.textContent = 'Please enter a valid ID number (only digits allowed).';
        validId = false;
        break;
      }
    }
  }

  if (validId) {
    idError.style.display = 'none';
    removeMessageId.style.display = 'none';
    idSuccess.style.display = 'block';
    return true;
  } else {
    idError.style.display = 'block';
    idError.style.color = 'red';
    removeMessageId.style.display = 'none';
    idSuccess.style.display = 'none';
    return false;
  }
}

idInput.addEventListener('blur', validateId);
idInput.addEventListener('focus', function() {
  idError.style.display = 'none';
  removeMessageId.style.display = 'block';
});

function validateDate() {
  var dateValue = dateInput.value.trim();
  var validDate = true;

  if (dateValue.length < 4) {
    dateError.textContent = 'Please enter a valid date (dd-mm-yyyy)';
    validDate = false;
  } else if (dateValue.substring(0,4) < 1900 || dateValue.substring(0,4) > 2023) {
    dateError.textContent = 'Please enter a valid year (1900-2023)';
    validDate = false;
  } else if (dateValue.substring(5,7) < 1 || dateValue.substring(5,7) > 12) {
    dateError.textContent = 'Please enter a valid month (01-12)';
    validDate = false;
  } else if (dateValue.substring(8,10) < 1 || dateValue.substring(8,10) > 31) {
    dateError.textContent = 'Please enter a valid day (01-31)';
    validDate = false;
  }

  if (validDate) {
    dateError.style.display = 'none';
    removeMessageDate.style.display = 'none';
    dateSuccess.style.display = 'block';
    return true;
  } else {
    dateError.style.display = 'block';
    dateError.style.color = 'red';
    removeMessageDate.style.display = 'none';
    dateSuccess.style.display = 'none';
    return false;
  }
}

dateInput.addEventListener('blur', validateDate);
dateInput.addEventListener('focus', function() {
  dateError.style.display = 'none';
  removeMessageDate.style.display = 'block';
});

function validatePhone() {
  var phoneValue = phoneInput.value.trim();
  var validPhone = true;

  if (phoneValue.length < 10) {
    phoneError.textContent = 'Please enter a valid phone number (10 or more digits).';
    validPhone = false;
  } else {
    for (var i = 0; i < phoneValue.length; i++) {
      if (numbers.indexOf(phoneValue[i]) === -1) {
        phoneError.textContent = 'Please enter a valid phone number (only digits allowed).';
        validPhone = false;
        break;
      }
    }
  }

  if (validPhone) {
    phoneError.style.display = 'none';
    removeMessagePhone.style.display = 'none';
    phoneSuccess.style.display = 'block';
    return true;
  } else {
    phoneError.style.display = 'block';
    phoneError.style.color = 'red';
    removeMessagePhone.style.display = 'none';
    phoneSuccess.style.display = 'none';
    return false;
  }
}

phoneInput.addEventListener('blur', validatePhone);
phoneInput.addEventListener('focus', function() {
  phoneError.style.display = 'none';
  removeMessagePhone.style.display = 'block';
});

function validateAddress() {
  var addressValue = addressInput.value.trim().toLowerCase();
  var validAddress = true;
  var hasLetter = false;
  var hasNumber = false;
  var hasSpace = false;

  if (addressValue.length < 5) {
    addressError.textContent = 'Please enter a valid address (minimum 5 characters).';
    validAddress = false;
  } else {
    for (var i = 0; i < addressValue.length; i++) {
      if (letters.indexOf(addressValue[i]) !== -1) {
        hasLetter = true;
      } else if (numbers.indexOf(addressValue[i]) !== -1) {
        hasNumber = true;
      } else if (addressValue[i] === ' ') {
        hasSpace = true;
      } else {
        addressError.textContent = 'Please enter a valid address (only letters, numbers, and spaces allowed).';
        validAddress = false;
        break;
      }
    }

    if (validAddress) {
      if (!hasLetter || !hasNumber || !hasSpace) {
        addressError.textContent = 'Please enter a valid address (at least one letter, one number, and one space).';
        validAddress = false;
      }
    }
  }

  if (validAddress) {
    addressError.style.display = 'none';
    removeMessageAddress.style.display = 'none';
    addressSuccess.style.display = 'block';
    return true;
  } else {
    addressError.style.display = 'block';
    addressError.style.color = 'red';
    removeMessageAddress.style.display = 'none';
    addressSuccess.style.display = 'none';
    return false;
  }
}

addressInput.addEventListener('blur', validateAddress);
addressInput.addEventListener('focus', function() {
  addressError.style.display = 'none';
  removeMessageAddress.style.display = 'block';
});

function validateCity() {
  var cityValue = cityInput.value.trim().toLowerCase();
  var validCity = true;

  if (cityValue.length < 3) {
    cityError.textContent = 'Please enter a valid city (minimum 3 characters).';
    validCity = false;
  } else {
    for (var i = 0; i < cityValue.length; i++) {
      if (allowedChars.indexOf(cityValue[i]) === -1) {
        cityError.textContent = 'Please enter a valid city (only letters, numbers and spaces are allowed).';
        validCity = false;
        break;
      }
    }
  }

  if (validCity) {
    cityError.style.display = 'none';
    removeMessageCity.style.display = 'none';
    citySuccess.style.display = 'block';
    return true;
  } else {
    cityError.style.display = 'block';
    cityError.style.color = 'red';
    removeMessageCity.style.display = 'none';
    citySuccess.style.display = 'none';
    return false;
  }
}

cityInput.addEventListener('blur', validateCity);
cityInput.addEventListener('focus', function() {
  cityError.style.display = 'none';
  removeMessageCity.style.display = 'block';
});

function validateCode() {
  var codeValue = codeInput.value.trim();
  var validCode = true;

  if (codeValue.length < 4 || codeValue.length > 5) {
    codeError.textContent = 'Please enter a valid code (4 or 5 numbers).';
    validCode = false;
  } else {
    for (var i = 0; i < codeValue.length; i++) {
      if (numbers.indexOf(codeValue[i]) === -1) {
        codeError.textContent = 'Please enter a valid code (only numbers allowed).';
        validCode = false;
        break;
      }
    }
  }

  if (validCode) {
    codeError.style.display = 'none';
    removeMessageCode.style.display = 'none';
    codeSuccess.style.display = 'block';
    return true;
  } else {
    codeError.style.display = 'block';
    codeError.style.color = 'red';
    removeMessageCode.style.display = 'none';
    codeSuccess.style.display = 'none';
    return false;
  }
}

codeInput.addEventListener('blur', validateCode);
codeInput.addEventListener('focus', function() {
  codeError.style.display = 'none';
  removeMessageCode.style.display = 'block';
});

function validateEmail() {
  var emailValue = emailInput.value.trim();
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  if (!emailExpression.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    emailError.style.color = 'red';
    removeMessageEmail.style.display = 'none';
    emailSuccess.style.display = 'none';
    return false;
  }
  emailError.style.display = 'none';
  removeMessageEmail.style.display = 'none';
  emailSuccess.style.display = 'block';
  return true;
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function() {
  emailError.style.display = 'none';
  emailSuccess.style.display = 'none';
  removeMessageEmail.style.display = 'block';
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
    removeMessagePassword.style.display = 'none';
    passwordSuccess.style.display = 'none';
    return false;
  }
  passwordError.style.display = 'none';
  removeMessagePassword.style.display = 'none';
  passwordSuccess.style.display = 'block';
  return true;
}

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function() {
  passwordError.style.display = 'none';
  passwordSuccess.style.display = 'none';
  removeMessagePassword.style.display = 'block';
});

function validateConfirm() {
  var confirmValue = confirmInput.value.trim();
  var hasLetter = false;
  var hasNumber = false;
  var hasSpecialCharacter = false;
  var length = confirmValue.length;

  for (var i = 0; i < length; i++) {
    var charCode = confirmValue.charCodeAt(i);
    if ((charCode >= 48 && charCode <= 57)) {
      hasNumber = true;
    } else if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      hasLetter = true;
    } else {
      hasSpecialCharacter = true;
    }
  }
  if (length < 8 || !hasLetter || !hasNumber || hasSpecialCharacter) {
    confirmError.textContent = (length < 8 || hasSpecialCharacter) ?
      'Please enter a valid confirm (minimum 8 characters, letters and numbers only).' :
      'Please enter a valid confirm (minimum 8 characters, must include at least one letter and one number).';
    confirmError.style.display = 'block';
    confirmError.style.color = 'red';
    removeMessageConfirm.style.display = 'none';
    confirmSuccess.style.display = 'none';
    return false;
  }
  confirmError.style.display = 'none';
  removeMessageConfirm.style.display = 'none';
  confirmSuccess.style.display = 'block';
  return true;
}

confirmInput.addEventListener('blur', validateConfirm);
confirmInput.addEventListener('focus', function() {
  confirmError.style.display = 'none';
  confirmSuccess.style.display = 'none';
  removeMessageConfirm.style.display = 'block';
});


submitButton.addEventListener('click', function() {
  var nameIsValid = validateName();
  var lastnameIsValid = validateLastname();
  var idIsValid = validateId();
  var dateIsValid = validateDate();
  var phoneIsValid = validatePhone();
  var addressIsValid = validateAddress();
  var cityIsValid = validateCity();
  var codeIsValid = validateCode();
  var emailIsValid = validateEmail();
  var passwordIsValid = validatePassword();
  var confirmIsValid = validateConfirm();

  if (nameIsValid && lastnameIsValid && idIsValid && dateIsValid && phoneIsValid && addressIsValid && cityIsValid
    && codeIsValid && emailIsValid && passwordIsValid && confirmIsValid) {
    var nameValue = nameInput.value.trim();
    var lastnameValue = lastnameInput.value.trim();
    var idValue = idInput.value.trim();
    var dateValue = dateInput.value.trim();
    var phoneValue = phoneInput.value.trim();
    var addressValue = addressInput.value.trim();
    var cityValue = cityInput.value.trim();
    var codeValue = codeInput.value.trim();
    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();
    var confirmValue = confirmInput.value.trim();

    alert('The registration was successful\nName: ' + nameValue + '\nLastname: ' + lastnameValue + '\nID: ' + idValue +
    '\nDate: ' + dateValue + '\nPhone: ' + phoneValue + '\nAddress: ' + addressValue + '\nCity: ' + cityValue +
    '\nCode: ' + codeValue + '\nEmail: ' + emailValue + '\nPassword: ' + passwordValue + '\nConfirm: ' + confirmValue);
  } else {
    var errorMessage = '';
    if (!nameIsValid) {
      errorMessage += 'Please enter a valid name.\n';
    }
    if (!lastnameIsValid) {
      errorMessage += 'Please enter a valid lastname.\n';
    }
    if (!idIsValid) {
      errorMessage += 'Please enter a valid ID.\n';
    }
    if (!dateIsValid) {
      errorMessage += 'Please enter a valid date.\n';
    }
    if (!phoneIsValid) {
      errorMessage += 'Please enter a valid phone number.\n';
    }
    if (!addressIsValid) {
      errorMessage += 'Please enter a valid address.\n';
    }
    if (!cityIsValid) {
      errorMessage += 'Please enter a valid city.\n';
    }
    if (!codeIsValid) {
      errorMessage += 'Please enter a valid code.\n';
    }
    if (!emailIsValid) {
      errorMessage += 'Please enter a valid email address.\n';
    }
    if (!passwordIsValid) {
      errorMessage += 'Please enter a valid password.\n';
    }
    if (!confirmIsValid) {
      errorMessage += 'Please confirm your password.\n';
    }
    alert(errorMessage);
  }
});
