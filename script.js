let dollarCount = 0;

const skibidiImage = document.getElementById('skibidi-image');
const dollarCountDisplay = document.getElementById('dollar-count');

// Increment dollar count on image click
skibidiImage.addEventListener('click', function() {
    dollarCount++;
    dollarCountDisplay.textContent = 'Dollars: ' + dollarCount;
});
