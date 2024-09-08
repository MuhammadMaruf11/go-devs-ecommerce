document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const removeItemIcons = document.querySelectorAll('.remove-item');
    const emptyCartMessage = document.querySelector('.cart-empty-message');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartButtons = document.getElementById('cartButtons');
    const subtotalPriceElement = document.getElementById('subtotalPrice');

    // Function to calculate the subtotal price
    function calculateSubtotal() {
        let total = 0;
        const cartItems = document.querySelectorAll('.product-cart-items');

        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('Tk', '').trim());
            total += quantity * price;
        });

        // Update the displayed subtotal price
        subtotalPriceElement.textContent = total.toFixed(2);
    }

    // Function to check if the cart is empty and update the UI
    function checkIfCartIsEmpty() {
        const cartItems = document.querySelectorAll('.product-cart-items');
        if (cartItems.length === 0) {
            cartItemsContainer.style.display = 'none'; // Hide cart items container
            cartSubtotal.style.display = 'none'; // Hide subtotal section
            cartButtons.style.display = 'none'; // Hide buttons (View Cart, Checkout)
            emptyCartMessage.style.display = 'block'; // Show empty cart message
        }
    }

    // Remove item from cart and update subtotal when 'fa-times' icon is clicked
    removeItemIcons.forEach((icon) => {
        icon.addEventListener('click', function () {
            const cartItem = icon.closest('.product-cart-items');
            cartItem.remove(); // Remove the clicked item
            calculateSubtotal(); // Recalculate subtotal
            checkIfCartIsEmpty(); // Check if the cart is empty after item removal
        });
    });

    // Initial calculation and empty cart check
    calculateSubtotal();
    checkIfCartIsEmpty();
});
