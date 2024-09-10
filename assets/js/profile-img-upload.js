// Get the image and input elements
const imageInput = document.getElementById('image-input');
const displayImage = document.getElementById('display-image');

// Add an event listener for file input changes
imageInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        // When the file is read, set it as the source of the image
        reader.onload = function (e) {
            displayImage.src = e.target.result;
        };

        // Read the file as a data URL (base64)
        reader.readAsDataURL(file);
    }
});
