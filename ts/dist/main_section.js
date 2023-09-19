document.addEventListener('DOMContentLoaded', function () {
    var runningWrapper = document.querySelector(".running_osung_wrapper");
    var osung = document.querySelector(".me");
    var backgroundPosition = 0;
    var imgMovingLeft = 0;
    var lastScrollY = window.scrollY;
    var isThrottled = false;
    window.addEventListener('scroll', function (event) {
        if (!isThrottled) { // throttle 상태가 아니라면
            isThrottled = true; // throttle 상태로 변경
            setTimeout(function () {
                isThrottled = false;
                runningOsung(); // 이벤트 핸들러 실행
            }, 200);
        }
    });
    function runningOsung() {
        var currentScrollY = window.scrollY; // 현재 스크롤 위치
        var runningSpeed = 4620;
        if (window.innerWidth < 1024 && window.innerWidth > 768) {
            runningSpeed = 5;
        }
        else if (window.innerWidth <= 768) {
            runningSpeed = 1;
        }
        else {
            runningSpeed = 10;
        }
        if (currentScrollY > lastScrollY) { // 아래로 스크롤
            osung.style.transform = 'scaleX(1)';
            imgMovingLeft += runningSpeed;
            if (imgMovingLeft > window.innerWidth) {
                imgMovingLeft = -30;
            }
        }
        else if (currentScrollY < lastScrollY) { // 위로 스크롤
            osung.style.transform = 'scaleX(-1)';
            imgMovingLeft -= runningSpeed;
            if (imgMovingLeft < 0) {
                imgMovingLeft = window.innerWidth;
            }
        }
        backgroundPosition -= 300;
        if (backgroundPosition <= -3300) {
            backgroundPosition = 0;
        }
        osung.style.backgroundPositionX = backgroundPosition + "px";
        runningWrapper.style.left = imgMovingLeft + "px";
        lastScrollY = currentScrollY;
    }
});
