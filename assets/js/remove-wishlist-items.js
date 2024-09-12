// Select all "Remove from wishlist" buttons
const removeButtons = document.querySelectorAll('.remove-whislist-item');

// Add event listeners to each button
removeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id'); // Get the data-id of the button
        const productItem = document.querySelector(`[data-id='${productId}']`); // Select the product item by data-id

        // Remove the product from the DOM
        if (productItem) {
            productItem.remove();
        }
    });
});