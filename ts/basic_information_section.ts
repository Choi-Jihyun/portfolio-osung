document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');
  const emailTexts = document.querySelectorAll(".email");
  const alertCopy = document.getElementById("alertCopy");
  const infoLi = document.querySelectorAll(".info_list > li");
  const blueCover = document.querySelector(".img_blue_cover");
  const myPic = document.querySelector(".my_pic");

  let infoLiObserver = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.target instanceof HTMLElement) {
        if (item.isIntersecting) {
          item.target.style.opacity = '1';
          item.target.style.top = '0px';
        } else {
          item.target.style.opacity = '0';
          item.target.style.top = '-100px';
        }
      }
    })
  });

  for (const item of infoLi) {
    infoLiObserver.observe(item);
  }

  let myPicObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target instanceof HTMLElement) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.top = '0';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.top = '-100px';
        }
      }
    });
  });

  myPicObserver.observe(myPic as HTMLElement);


  if (!alertCopy) {
    console.error('Unable to find element with id "alertCopy".');
    return;
  }

  for (const item of emailTexts) {
    item.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(item.textContent || '');
        alertCopy.style.opacity = "1";
        alertCopy.innerText = "이메일을 복사했습니다.";
        setTimeout(() => {
            alertCopy.style.opacity = "0";
            // alertCopy.innerText = "";
        }, 1200);
      } catch (error) {
          console.error("Failed to copy to clipboard:", error);
      }
    });
  }


  if (myPic) {
    myPic.addEventListener('mousemove', heartAni)
    myPic.addEventListener('touchmove', heartAni)
  }

  function heartAni (e: any) {
    let heart = document.createElement('span');
    heart.classList.add('heart')
    
    if (heart instanceof HTMLElement) {
      let x = e.offsetX;
      let y = e.offsetY;
      heart.style.left = x+'px';
      heart.style.top = y+'px';
      
      let size = Math.random() * 80;
      heart.style.width = 20 + size + 'px';
      heart.style.height = 20 + size + 'px';
      
      let transformValue = Math.random() * 360;
      heart.style.transform = 'rotate('+ transformValue +'deg)';
      
      myPic?.appendChild(heart);

      setTimeout(function(){
        heart.remove();
      }, 1000)
    }
  }

});
