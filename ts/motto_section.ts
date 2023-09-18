document.addEventListener('DOMContentLoaded', ()=>{
  const blueCircle = document.querySelector(".mt_bg_circle_left");
  const orangeCircle = document.querySelector(".mt_bg_circle_right");
  const mottoText = document.querySelector(".motto_text");
  const mtBgMovingText = document.querySelector(".mt_bg_text");

  const blueCircleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target instanceof HTMLElement) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0.2';
          entry.target.style.bottom = '-10rem';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.bottom = '-20rem';
        }
      }
    })
  });
  const orangeCircleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target instanceof HTMLElement) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0.5';
          entry.target.style.bottom = '7rem';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.bottom = '-10rem';
        }
      }
    })
  });
  const mottoTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target instanceof HTMLElement) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.opacity = '0';
        }
      }
    })
  });
  const mtBgMovingTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target instanceof HTMLElement) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.opacity = '0';
        }
      }
    })
  });

  blueCircleObserver.observe(blueCircle as HTMLElement);
  orangeCircleObserver.observe(orangeCircle as HTMLElement);
  mottoTextObserver.observe(mottoText as HTMLElement);
  mtBgMovingTextObserver.observe(mtBgMovingText as HTMLElement);

})