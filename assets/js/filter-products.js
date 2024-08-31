/*-------------------------------------------
        All Collection Filter
--------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

    // Get the primary color value from CSS variable
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

    // filter range values 
    const minRange = document.getElementById('min-range');
    const maxRange = document.getElementById('max-range');
    const minValue = document.getElementById('min-value');
    const maxValue = document.getElementById('max-value');
    const rangeTrack = document.getElementById('range-slider-track');

    // All Collection Filter

    // Filter submit 
    document.getElementById('filter-submit').addEventListener('click', (e) => {
        e.preventDefault();
        // Collect filter values
        const sortValue = document.getElementById('sort-filter').value;
        const categoryValue = document.getElementById('category-filter').value;
        const ratingValue = document.querySelector('input[name="rating"]:checked')?.value;

        // Implement your filtering logic here
        console.log({
            sort: sortValue,
            category: categoryValue,
            rating: ratingValue,
            priceRange: {
                min: minRange.value,
                max: maxRange.value
            }
        });
    });

    // Filter reset 
    document.getElementById('filter-reset').addEventListener('click', function () {
        // Reset all filter inputs
        document.getElementById('sort-filter').value = 'default';
        document.getElementById('category-filter').value = 'all';
        document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
        minValue.textContent = 0;
        maxValue.textContent = 10000;
        minRange.value = 0;
        maxRange.value = 10000;
        rangeTrack.style.background = `linear-gradient(to right,${primaryColor} 0%, ${primaryColor} 100%)`;
    });


    // Filter price range



    function updateSlider() {
        const minVal = parseInt(minRange.value);
        const maxVal = parseInt(maxRange.value);

        if (minVal > maxVal - 10) {
            minRange.value = maxVal - 10;
        }

        if (maxVal < minVal + 10) {
            maxRange.value = minVal + 10;
        }

        minValue.textContent = minRange.value;
        maxValue.textContent = maxRange.value;

        // Update the track visuals
        const minPercent = (minRange.value / minRange.max) * 100;
        const maxPercent = (maxRange.value / maxRange.max) * 100;

        if (rangeTrack) {
            rangeTrack.style.background = `linear-gradient(to right, #aaa ${minPercent}%, ${primaryColor} ${minPercent}%, ${primaryColor} ${maxPercent}%, #aaa ${maxPercent}%)`;
        } else {
            console.error('Element with id "range-slider-track" not found.');
        }
    }

    minRange.addEventListener('input', updateSlider);
    maxRange.addEventListener('input', updateSlider);

    updateSlider();

});

