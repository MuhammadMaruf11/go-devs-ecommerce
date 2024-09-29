
$(document).ready(function () {

    /*------------------------------------
         featured products Slider - index.html 
       --------------------------------------*/

    const featureSwiperContainer = document.querySelector('.related-product-active.feature-product .swiper-container')

    // Slider With Thumbs
    if (jQuery(featureSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(featureSwiperContainer, {
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
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },

            },

            a11y: false

        });
    }

    const featureBtnPrev = document.querySelector('.related-product-active.feature-product .related-product-button .btn-prev');
    const featureBtnNext = document.querySelector('.related-product-active.feature-product .related-product-button .btn-next');

    featureBtnPrev.addEventListener('click', () => {
        featureSwiperContainer.swiper.slidePrev();
    });

    featureBtnNext.addEventListener('click', () => {
        featureSwiperContainer.swiper.slideNext();
    })

    /*------------------------------------
         new arrivals product  Slider - index.html 
       --------------------------------------*/

    const newSwiperContainer = document.querySelector('.related-product-active.new-product .swiper-container')

    // Slider With Thumbs
    if (jQuery(newSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(newSwiperContainer, {
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
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },

            },

            a11y: false

        });
    }

    const newBtnPrev = document.querySelector('.related-product-active.new-product .related-product-button .btn-prev');
    const newBtnNext = document.querySelector('.related-product-active.new-product .related-product-button .btn-next');

    newBtnPrev.addEventListener('click', () => {
        newSwiperContainer.swiper.slidePrev();
    });

    newBtnNext.addEventListener('click', () => {
        newSwiperContainer.swiper.slideNext();
    })
});