const generatePassword = require('generate-password');

const password = generatePassword({
  length: 12, // Change length as desired
  numbers: true, // Include numbers
  symbols: true, // Include symbols
  uppercase: true, // Include uppercase letters
});

console.log("Your generated password:", password);
