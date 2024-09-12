// Select all "Remove from wishlist" buttons
const removeButtons = document.querySelectorAll('.remove-whislist-item');
const whislistRow = document.querySelector('.cart-area .container .row');

// Function to check if there are any items left with a `data-id`
function checkWishlistEmpty() {
    const remainingItems = document.querySelectorAll('[data-id]'); // Select all elements with `data-id`
    console.log('remainingItems', remainingItems);
    // If no items with `data-id` are left, display the empty wishlist message
    if (remainingItems.length === 0) {
        whislistRow.innerHTML = `
            <div class='col-12'>
                <div class='py-5'>
                    <div class="mb-3 text-center">
                        <h3>Wishlist</h3>
                    </div>
                    <div class="mb-3 text-center">
                        <h4 class='text-theme'>Your wishlist is currently empty!</h4>
                    </div>
                    <div class='text-center'>
                        <p>Continue browsing <a class='fw-bold' href='../../collection.html'><u>here</u></a></p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Add event listeners to each "Remove from wishlist" button
removeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id'); // Get the data-id of the button
        const productItem = document.querySelector(`[data-id='${productId}']`); // Select the product item by data-id

        // Remove the product from the DOM if it exists
        if (productItem) {
            productItem.remove();
        }

        // Check if there are no more items with `data-id` left
        checkWishlistEmpty();
    });
});
