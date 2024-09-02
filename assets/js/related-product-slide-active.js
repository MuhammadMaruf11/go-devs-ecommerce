
/*------------------------------------
     gallery  Slider - index.html 
   --------------------------------------*/
$(document).ready(function () {

    const relatedSwiperContainer = document.querySelector('.related-product-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(relatedSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(relatedSwiperContainer, {
            // Optional parameters
            slidesPerView: 4,
            slidesPerColumn: 1,
            loop: true,
            spaceBetween: 24,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },

            },

            a11y: false

        });
    }

    const galleryBtnPrev = document.querySelector('.related-product-button .btn-prev');
    const galleryBtnNext = document.querySelector('.related-product-button .btn-next');

    galleryBtnPrev.addEventListener('click', () => {
        gallerySwiperContainer.swiper.slidePrev();
    });

    galleryBtnNext.addEventListener('click', () => {
        gallerySwiperContainer.swiper.slideNext();
    })
});