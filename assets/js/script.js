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
         mobile footer fixed
     --------------------------------------------- */

    document.querySelectorAll('.mobile-footer-items').forEach(item => {
        const href = item.getAttribute('href');
        const currentUrl = window.location.pathname.split('/').pop(); // Get the current page

        if (href === `./${currentUrl}` || href === currentUrl) {
            item.classList.add('active');
        }
    });





})
