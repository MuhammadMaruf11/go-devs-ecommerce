document.addEventListener("DOMContentLoaded", function () {
    const billAddressCheckbox = document.getElementById("billAddress");
    const billAddressWrap = document.querySelector(".bill-address-wrap");

    // Function to toggle the visibility of the billing address
    function toggleBillingAddress() {
        if (billAddressCheckbox.checked) {
            billAddressWrap.style.display = "none";
        } else {
            billAddressWrap.style.display = "block";
        }
    }

    // Add event listener to the checkbox to detect changes
    billAddressCheckbox.addEventListener("change", toggleBillingAddress);

    // Initial call to hide/show based on the initial state of the checkbox
    toggleBillingAddress();
});