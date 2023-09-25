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
    // 스타트 하는 오성
    var elements = Array.from(document.querySelectorAll('.rsg'));
    elements.push(document.querySelector('.t_title'));
    var durations = [1000, 1000, 2000];
    var totalDelay = 3000;
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
    var start_img = document.querySelector('.start_osung img');
    var imgDurations = [100, 1800, 500, 500, 500];
    var totalImgDelay = 5500;
    var imgSources = [
        "/images/main/run_start-02.png",
        "/images/main/run_start-03.png",
        "/images/main/run_start-04.png",
        "/images/main/run_start-05.png",
        "/images/main/run_start-06.png"
    ];
    imgSources.forEach(function (src, index) {
        setTimeout(function () {
            start_img.src = src;
            if (index >= 3) {
                start_img.style.top = index === 3 ? '-2rem' : '-1rem';
                start_img.style.left = index === 3 ? '50vw' : '100vw';
            }
        }, totalImgDelay);
        totalImgDelay += imgDurations[index];
    });
});
