document.addEventListener('DOMContentLoaded', function () {
    var runningWrapper = document.querySelector(".running_osung_wrapper");
    var osung = document.querySelector(".me");
    var backgroundPosition = 0;
    var imgMovingLeft = -300;
    window.addEventListener('scroll', runningOsung);
    function runningOsung() {
        console.log('scroll: ', scrollY);
        backgroundPosition = backgroundPosition - 300;
        if (backgroundPosition < -3300) {
            backgroundPosition = 0;
        }
        imgMovingLeft = imgMovingLeft + 10;
        if (imgMovingLeft > window.innerWidth) {
            imgMovingLeft = 0;
        }
        osung.style.backgroundPositionX = backgroundPosition + "px";
        runningWrapper.style.left = imgMovingLeft + "px";
    }
});
