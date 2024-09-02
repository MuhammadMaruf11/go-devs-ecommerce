document.addEventListener('DOMContentLoaded', function () {
    const reviewItems = document.querySelectorAll('.review-star-items');
    let maxValue = 0;

    // First Pass: Find the maximum value of data-number
    reviewItems.forEach(item => {
        const number = parseInt(item.getAttribute('data-number') || '0');
        if (number > maxValue) {
            maxValue = number;
        }
    });

    // Second Pass: Set data-total to the maximum value and adjust the bar width
    reviewItems.forEach(item => {
        item.setAttribute('data-total', maxValue);
        const number = parseInt(item.getAttribute('data-number') || '0');
        const percentage = (number / maxValue) * 100;

        const itemBarFill = item.querySelector('.item-bar-fill');
        itemBarFill.style.width = `${percentage}%`;
    });

});
