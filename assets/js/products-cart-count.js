document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.querySelector('.product-decrease');
    const increaseBtn = document.querySelector('.product-increase');
    const inputField = document.querySelector('.product-countdown-input');

    decreaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 1) { // Ensure value doesn't go below 1
            inputField.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', function () {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
    });
});
