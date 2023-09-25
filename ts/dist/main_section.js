document.addEventListener('DOMContentLoaded', function () {
    var runningWrapper = document.querySelector(".running_osung_wrapper");
    var osung = document.querySelector(".me");
    var startOsung = document.querySelector(".start_osung");
    var backgroundPosition = 0;
    var imgMovingLeft = 0;
    var lastScrollY = window.scrollY;
    var isThrottled = false;
    // start 달리기
    gsap.to(startOsung, { delay: 1.5, display: 'block', opacity: 1, duration: 2, ease: "power1.out" });
    window.addEventListener('scroll', controlRunningEvent);
    function controlRunningEvent() {
        if (!isThrottled) { // throttle 상태가 아니라면
            isThrottled = true; // throttle 상태로 변경
            setTimeout(function () {
                isThrottled = false;
                runningOsung(); // 이벤트 핸들러 실행
            }, 100);
        }
    }
    function runningOsung() {
        var currentScrollY = window.scrollY; // 현재 스크롤 위치
        var runningSpeed = 4620;
        // if (window.innerWidth < 1024 && window.innerWidth > 768) {
        //   runningSpeed = 5;
        // } else if (window.innerWidth <= 768) {
        //   runningSpeed = 1;
        // } else {
        //   runningSpeed = 10;
        // }
        runningSpeed = 10;
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
    // 각 p태그 별로 나타나는 시간 및 대기시간 설정
    var elements = Array.from(document.querySelectorAll('.rsg'));
    elements.push(document.querySelector('.t_title'));
    // 각 p태그 별로 나타나는 시간 및 대기시간 설정
    var durations = [3000, 2000, 3000];
    var totalDelay = 0;
    elements.forEach(function (element, index) {
        setTimeout(function () {
            element.style.opacity = '1';
            element.style.left = '0';
            element.style.display = 'block';
            setTimeout(function () {
                if (index !== elements.length - 1) {
                    element.style.opacity = '0';
                    setTimeout(function () {
                        element.style.display = 'none';
                    }, 1000);
                }
            }, durations[index]);
        }, totalDelay);
        totalDelay += durations[index] + 1000;
    });
});
