// DOM elements
const length = document.getElementById("length");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate = document.getElementById("generate");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

// Generate password
function generatePassword() {
  const lengthValue = length.value;
  const lowercaseChecked = lowercase.checked;
  const uppercaseChecked = uppercase.checked;
  const numbersChecked = numbers.checked;
  const symbolsChecked = symbols.checked;

  let characters = "";
  let generatedPassword = "";

  if (lowercaseChecked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercaseChecked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numbersChecked) {
    characters += "0123456789";
  }

  if (symbolsChecked) {
    characters += "!@#$%^&*_+~`\:;?";
  }

  for (let i = 0; i < lengthValue; i++) {
    generatedPassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  password.value = generatedPassword;
}

// Copy to clipboard
function copyToClipboard() {
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
}

// Event listeners
generate.addEventListener("click", generatePassword);
copy.addEventListener("click", copyToClipboard);


// form data submitted then success message

