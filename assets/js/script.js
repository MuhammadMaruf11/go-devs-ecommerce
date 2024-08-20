const toggleBtn = document.querySelector('.toggle-icon');

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.mobile-menu').classList.toggle('open')
})


const menuItems = document.querySelectorAll('.mobile-menu > ul > li');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Check if the clicked item is already open
        const isOpen = item.classList.contains('open');

        // Remove 'open' class from all <li> elements
        menuItems.forEach(el => el.classList.remove('open'));

        // If the clicked item was not already open, add the 'open' class
        if (!isOpen) {
            item.classList.add('open');
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