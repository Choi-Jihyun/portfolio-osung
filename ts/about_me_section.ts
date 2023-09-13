document.addEventListener('DOMContentLoaded', ()=>{
  const aboutmeSection = document.querySelector('#about_me');
  const awardsList = document.querySelectorAll('#awards_list > li');

  gsap.to(awardsList[0], {
    x: 0, 
    ease: 'power1.out', 
    scrollTrigger: {
        trigger: awardsList[0],
        markers: true,
        start: '0% 70%',
        end: '100% 60%',
        toggleActions: 'play reverse play reverse',
        scrub: 1, 
        pin: true,
    }
  })
})