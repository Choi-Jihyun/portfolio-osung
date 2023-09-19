document.addEventListener('DOMContentLoaded', ()=>{
  const runningWrapper = document.querySelector(".running_osung_wrapper") as HTMLElement;
  const osung = document.querySelector(".me") as HTMLElement;
  
  let backgroundPosition: number = 0;
  let imgMovingLeft: number = -300;

  window.addEventListener('scroll', runningOsung)

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
  
    osung.style.backgroundPositionX = `${backgroundPosition}px`;
    runningWrapper.style.left = `${imgMovingLeft}px`;
  }



  })