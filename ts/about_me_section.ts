document.addEventListener('DOMContentLoaded', ()=>{
  const aboutmeSection = document.querySelector('#about_me');
  const awardsList = document.querySelectorAll('#awards_list > li');

  gsap.to(awardsList[0], {
    left: 0, 
    scrollTrigger: {
        trigger: awardsList[0],
        markers: true,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 2, 
    }
  })
  gsap.to(awardsList[1], {
    left: 0, 
    scrollTrigger: {
        trigger: awardsList[1],
        markers: true,
        start: 'top 65%',
        end: 'bottom 65%',
        scrub: 2, 
    }
  })
  gsap.to(awardsList[2], {
    left: 0, 
    scrollTrigger: {
        trigger: awardsList[2],
        markers: true,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: 2, 
    }
  })
  gsap.to(awardsList[3], {
    left: 0, 
    scrollTrigger: {
        trigger: awardsList[3],
        markers: true,
        start: 'top 55%',
        end: 'bottom 55%',
        scrub: 2, 
    }
  })


})