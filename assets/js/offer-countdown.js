/*-------------------------------------------
       offer price countdown
   --------------------------------------------- */


document.addEventListener('DOMContentLoaded', function () {
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
});
