document.addEventListener('DOMContentLoaded', ()=>{
  const runningWrapper = document.querySelector(".running_osung_wrapper") as HTMLElement;
  const osung = document.querySelector(".me") as HTMLElement;
  const startOsung = document.querySelector(".start_osung") as HTMLElement;
  
  let backgroundPosition: number = 0;
  let imgMovingLeft: number = 0;
  let lastScrollY: number = window.scrollY;
  let isThrottled: boolean = false;

  // start 달리기
  gsap.to(startOsung, {delay: 1.5, display: 'block', opacity: 1, duration: 2, ease: "power1.out"})




  window.addEventListener('scroll', controlRunningEvent);

  function controlRunningEvent() {
    if (!isThrottled) { // throttle 상태가 아니라면
      isThrottled = true; // throttle 상태로 변경
      setTimeout(() => { // 지정된 시간 후에 throttle 상태 해제
        isThrottled = false;
        runningOsung(); // 이벤트 핸들러 실행
      }, 100);
    }
  }

  function runningOsung() {
    const currentScrollY: number = window.scrollY; // 현재 스크롤 위치
    let runningSpeed: number = 4620;
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
    } else if (currentScrollY < lastScrollY) { // 위로 스크롤
      osung.style.transform = 'scaleX(-1)';
      imgMovingLeft -= runningSpeed; 
      if(imgMovingLeft < 0){
        imgMovingLeft = window.innerWidth ;
      }
    }
    backgroundPosition -= 300;
    if (backgroundPosition <= -3300) {
      backgroundPosition = 0;
    }

    osung.style.backgroundPositionX=`${backgroundPosition}px`;
    runningWrapper.style.left=`${imgMovingLeft}px`;
    lastScrollY=currentScrollY;
  }



  // 각 p태그 별로 나타나는 시간 및 대기시간 설정
  let elements = Array.from(document.querySelectorAll('.rsg'));
  elements.push(document.querySelector('.t_title') as HTMLElement);
  
  // 각 p태그 별로 나타나는 시간 및 대기시간 설정
  let durations = [3000, 2000, 3000];
  let totalDelay = 0;
  
  elements.forEach((element, index) => {
      setTimeout(() => {
          element.style.opacity = '1';
          element.style.left = '0';
          element.style.display = 'block';
          setTimeout(() => {
              if (index !== elements.length -1) {
                  element.style.opacity = '0';
                  setTimeout(() => {
                      element.style.display = 'none';
                  }, 1000); 
              }
          },durations[index]);
      }, totalDelay);
      totalDelay += durations[index] + 1000
    })

})
