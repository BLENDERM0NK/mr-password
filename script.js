function generatePassword() {
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeLetters = document.getElementById('includeLetters').checked;
    const includeMixedCase = document.getElementById('includeMixedCase').checked;
    const includePunctuation = document.getElementById('includePunctuation').checked;
    const totalCharacters = document.getElementById('totalCharacters').value;

    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const mixedCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const punctuation = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = '';
    if (includeNumbers) characters += numbers;
    if (includeLetters) characters += letters;
    if (includeMixedCase) characters += mixedCase;
    if (includePunctuation) characters += punctuation;

    let password = '';
    for (let i = 0; i < totalCharacters; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('passwordDisplay').textContent = password;
}

function copyPassword() {
    const passwordDisplay = document.getElementById('passwordDisplay');
    const textArea = document.createElement('textarea');
    textArea.value = passwordDisplay.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Password copied to clipboard!');
}