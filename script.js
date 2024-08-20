let cookieCount = 0;
let dollarCount = 0;

const cookieButton = document.getElementById('cookie-button');
const skibidiImage = document.getElementById('skibidi-image');
const cookieCountDisplay = document.getElementById('cookie-count');
const dollarCountDisplay = document.getElementById('dollar-count');

// Increment cookie count on button click
cookieButton.addEventListener('click', function() {
    cookieCount++;
    cookieCountDisplay.textContent = 'Cookies: ' + cookieCount;
});

// Increment dollar count on image click
skibidiImage.addEventListener('click', function() {
    dollarCount++;
    dollarCountDisplay.textContent = 'Dollars: ' + dollarCount;
});

