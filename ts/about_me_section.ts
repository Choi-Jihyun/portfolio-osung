document.addEventListener('DOMContentLoaded', ()=>{
  const awardsList = document.querySelectorAll('#awards_list > li');
  const certificates = document.querySelector("#certificates");

  gsap.to(awardsList[0], {
    left: 0, 
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: awardsList[0],
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 2, 
    }
  })
  gsap.to(awardsList[1], {
    left: 0, 
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: awardsList[1],
        start: 'top 65%',
        end: 'bottom 65%',
        scrub: 2, 
    },
    onComplete: ()=>{
      gsap.to(certificates, {opacity: 1, duration: 0.6, ease: "power1.out"})
    }
  })
  gsap.to(awardsList[2], {
    left: 0, 
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: awardsList[2],
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 2, 
    }
  })
  gsap.to(awardsList[3], {
    left: 0, 
    opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: awardsList[3],
        start: 'top 55%',
        end: 'bottom 55%',
        scrub: 2, 
    }
  })


})