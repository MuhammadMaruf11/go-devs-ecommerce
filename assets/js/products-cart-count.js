document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtns = document.querySelectorAll('.product-decrease');
    const increaseBtns = document.querySelectorAll('.product-increase');
    const inputFields = document.querySelectorAll('.product-countdown-input');
    const clearCartBtn = document.getElementById('clearAllCart');
    const totalPriceElement = document.querySelector('.total'); // Total selector
    const clearSingleCartBtns = document.querySelectorAll('.clear-single-cart i');


    // Function to calculate the subtotal and total price
    function calculateSubtotalAndTotal() {
        let subtotal = 0;

        const subtotalElements = document.querySelectorAll('.cart-subtotal-price');
        subtotalElements.forEach(subtotalElem => {
            const price = parseFloat(subtotalElem.innerText.replace('Tk', '').trim());
            subtotal += price;
        });
        if (totalPriceElement) {
            totalPriceElement.innerText = `Tk ${subtotal.toFixed(2)}`;
        }
    }


    // Function to update the subtotal for individual items
    function updateSubtotal(input, row) {
        const priceElement = row.querySelector('.cart-product-price');
        const subtotalElement = row.querySelector('.cart-subtotal-price');
        const price = parseFloat(priceElement.innerText.replace('Tk', '').trim());
        const quantity = parseInt(input.value);
        const newSubtotal = price * quantity;

        if (subtotalElement) {
            subtotalElement.innerText = `Tk ${newSubtotal.toFixed(2)}`;
        }

        calculateSubtotalAndTotal();
    }

    if (decreaseBtns) {
        // Decrease button event listener
        decreaseBtns.forEach((btn, index) => {
            const input = inputFields[index];
            const row = btn.closest('tr');
            btn.addEventListener('click', function () {
                let currentValue = parseInt(input.value);
                if (currentValue > 1) {
                    input.value = currentValue - 1;
                    updateSubtotal(input, row);
                }
            });
        });
    }

    if (increaseBtns) {
        // Increase button event listener
        increaseBtns.forEach((btn, index) => {
            const input = inputFields[index];
            const row = btn.closest('tr');
            btn.addEventListener('click', function () {
                let currentValue = parseInt(input.value);
                input.value = currentValue + 1;
                updateSubtotal(input, row);
            });
        });
    }

    if (inputFields) {
        // Input field event listener for direct changes
        inputFields.forEach((input, index) => {
            const row = input.closest('tr');
            input.addEventListener('input', function () {
                if (input.value < 1) input.value = 1;
                updateSubtotal(input, row);
            });
        });
    }

    if (clearCartBtn) {
        // Clear all cart items
        clearCartBtn.addEventListener('click', function () {
            const cartWrap = document.querySelector('.cart-wrap table');
            cartWrap.innerHTML =
                `<div class='py-5'>
                    <div class="mb-3 text-center">
                        <h3>Shopping Cart</h3>
                    </div>
                    <div class="mb-3 text-center">
                        <h4 class='text-theme'>Your cart is currently empty.</h4>
                    </div>
                        <div class='text-center'>
                        <p>Continue browsing <a class='fw-bold' href='../../collection.html'><u>here</u></a></p>
                        </div>
                </div>`;
            console.log('cart', cartWrap);
            calculateSubtotalAndTotal();
        });
    }

    if (clearSingleCartBtns) {
        // Remove single item from the cart
        clearSingleCartBtns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const row = btn.closest('tr');
                row.remove();
                calculateSubtotalAndTotal();
            });
        });
    }


    calculateSubtotalAndTotal();
});
