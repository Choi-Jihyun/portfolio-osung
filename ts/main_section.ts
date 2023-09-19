document.addEventListener('DOMContentLoaded', ()=>{
  const runningWrapper = document.querySelector(".running_osung_wrapper") as HTMLElement;
  const osung = document.querySelector(".me") as HTMLElement;
  
  let backgroundPosition: number = 0;
  let imgMovingLeft: number = 0;
  let lastScrollY: number = window.scrollY;

  window.addEventListener('scroll', runningOsung)

  function runningOsung() {
  //   console.log('scroll: ', scrollY);
  //   backgroundPosition = backgroundPosition - 300;
  //   if (backgroundPosition < -3300) {
  //     backgroundPosition = 0;
  //   }
  //   imgMovingLeft = imgMovingLeft + 10;
  //   if (imgMovingLeft > window.innerWidth) {
  //     imgMovingLeft = -30;
  //   }
  
  //   osung.style.backgroundPositionX = `${backgroundPosition}px`;
  //   runningWrapper.style.left = `${imgMovingLeft}px`;
  // }

    const currentScrollY: number = window.scrollY; // 현재 스크롤 위치
    
    if (currentScrollY > lastScrollY) { // 아래로 스크롤
      osung.style.transform = 'scaleX(1)';
      imgMovingLeft += 15;
      if (imgMovingLeft > window.innerWidth) {
        imgMovingLeft = -30;
      }
    } else if (currentScrollY < lastScrollY) { // 위로 스크롤
      osung.style.transform = 'scaleX(-1)';
      imgMovingLeft -=10; 
      if(imgMovingLeft < 0){
        imgMovingLeft= window.innerWidth ;
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



})