document.addEventListener('DOMContentLoaded', function () {
    // Size Selection
    const selectedSizeInput = document.getElementById('selected-size');
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedSizeInput.value = this.dataset.size;
        });
    });

    // Color Selection
    const selectedColorInput = document.getElementById('selected-color');
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedColorInput.value = this.dataset.color;
        });
    });
});
