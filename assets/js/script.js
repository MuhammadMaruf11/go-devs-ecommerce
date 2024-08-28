document.addEventListener('DOMContentLoaded', function () {


    /*-------------------------------------------
        mobile menu 
     --------------------------------------------- */


    const toggleBtn = document.querySelector('.toggle-icon');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('open')
        toggleBtn.classList.toggle('open')
    })

    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.remove('open')
        toggleBtn.classList.remove('open')
    })

    document.querySelectorAll('.mobile-main-menu > li > a').forEach(mainMenuItem => {
        mainMenuItem.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default link behavior

            // Toggle the open class on the clicked item
            const parentLi = mainMenuItem.parentElement;
            const isOpen = parentLi.classList.contains('open');
            document.querySelectorAll('.mobile-main-menu > li').forEach(li => li.classList.remove('open'));

            if (!isOpen) {
                parentLi.classList.add('open');
            }
        });
    });


    document.querySelectorAll('.mobile-sub-menu > li > a').forEach(subMenuItem => {
        subMenuItem.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default link behavior

            // Toggle the open class on the clicked item
            const parentLi = subMenuItem.parentElement;
            const isOpen = parentLi.classList.contains('open');
            document.querySelectorAll('.mobile-sub-menu > li').forEach(li => li.classList.remove('open'));

            if (!isOpen) {
                parentLi.classList.add('open');
            }
        });
    });

    /*-------------------------------------------
         Sticky Header
     --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-bottom");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    /*-------------------------------------------
         footer items collapsed
     --------------------------------------------- */

    document.querySelectorAll('.footer-widget h4').forEach(header => {
        header.addEventListener('click', function () {
            const parentWidget = this.parentElement;

            // Check if this footer-widget is already active
            const isActive = parentWidget.classList.contains('active');

            // Collapse all footer widgets
            document.querySelectorAll('.footer-widget').forEach(widget => widget.classList.remove('active'));

            // If it wasn't active, expand this one
            if (!isActive) {
                parentWidget.classList.add('active');
            }
        });
    });



    /*-------------------------------------------
         offer price countdown
     --------------------------------------------- */


    const countdownEndDate = new Date('2024-12-31T23:59:59').getTime();


    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownEndDate - now;

        if (timeLeft < 0) {

            document.querySelector('.offer-product-countdown').innerHTML = "<p>Offer has expired!</p>";
            return;
        }


        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }


    setInterval(updateCountdown, 1000);

    updateCountdown();
})