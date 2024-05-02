// script.js
// JavaScript code for generating random password
function generate() {
  // Retrieve user input values
  var length = parseInt(document.getElementById("ctl00_MainContent_txtPasswordLength").value);
  var includeLower = document.getElementById("ctl00_MainContent_chkIncludeLowerChar").checked;
  var includeUpper = document.getElementById("ctl00_MainContent_chkIncludeUpperChar").checked;
  var includeNumbers = document.getElementById("ctl00_MainContent_chkIncludeNumbers").checked;
  var includeSymbols = document.getElementById("ctl00_MainContent_chkIncludeSymbols").checked;
  var excludeSimilar = document.getElementById("ctl00_MainContent_chkExcludeSimilar").checked;
  var excludeAmbiguous = document.getElementById("ctl00_MainContent_chkExcludeAmbiguous").checked;
  var noDuplicate = document.getElementById("ctl00_MainContent_chkNoDuplicate").checked;

  // Define character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Combine character sets based on user input
  var chars = "";
  if (includeLower) chars += lowercaseChars;
  if (includeUpper) chars += uppercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;

  // Remove similar and ambiguous characters if selected
  if (excludeSimilar) chars = chars.replace(/[o0il1]/g, '');
  if (excludeAmbiguous) chars = chars.replace(/[~;:.{}<>[\]()/'`]/g, '');

  // Generate random password
  var password = "";
  for (var i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Display generated password
  document.getElementById("ctl00_MainContent_txtPassword").value = password;
}

// Function to copy password to clipboard
function copyUrl() {
  var copyText = document.getElementById("ctl00_MainContent_txtPassword");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Password copied to clipboard: " + copyText.value);
}
