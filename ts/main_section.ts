document.addEventListener('DOMContentLoaded', ()=>{
  const runningWrapper = document.querySelector(".running_osung_wrapper") as HTMLElement;
  const osung = document.querySelector(".me") as HTMLElement;
  const startOsung = document.querySelector(".start_osung") as HTMLElement;
  
  let backgroundPosition: number = 0;
  let imgMovingLeft: number = 0;
  let lastScrollY: number = window.scrollY;
  let isThrottled: boolean = false;



  window.addEventListener('scroll', controlRunningEvent);

  function controlRunningEvent() {
    osung.style.opacity = '1';
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


  // 스타트 글씨
  let elements = Array.from(document.querySelectorAll('.rsg'));
  elements.push(document.querySelector('.t_title') as HTMLElement);
  let durations = [1000, 1000, 2000];
  let totalDelay = 3000;
  
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

    // start하는 오성
  gsap.to(startOsung, {delay: 1.5, display: 'block', opacity: 1, duration: 2, ease: "power1.out"});
  let start_img = document.querySelector('.start_osung img') as HTMLImageElement;
  let imgDurations = [100, 1200, 300, 300, 300, 500, 500];
  let totalImgDelay = 5500;
  let imgSources = [
      "/images/main/run_start-02.webp",
      "/images/main/run_start-03.webp",
      "/images/main/run_start-04.webp",
      "/images/main/run_start-05.webp",
      "/images/main/run_start-06.webp",
      "/images/main/run_start-07.webp",
      "/images/main/run_start-08.webp",
  ];

  imgSources.forEach((src, index) => {
    setTimeout(() => {
      start_img.src = src;
      if (index >= 3) {
        start_img.style.top = index === 3 ? '-2rem' : '-1rem';
        switch(index) {
          case 3:
              start_img.style.left = '25vw';
              break;
          case 4:
              start_img.style.left = '50vw';
              break;
          case 5:
              start_img.style.left = '75vw';
              break;
          case 6:
              start_img.style.left = '100vw';
              break;
          case 7:
            default:  
              start_img.style.left ='100vw'; 
              break;   
      }
      }
    }, totalImgDelay);
    
    totalImgDelay += imgDurations[index];
  });


})
