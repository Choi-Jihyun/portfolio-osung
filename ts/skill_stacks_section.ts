document.addEventListener('DOMContentLoaded', ()=>{
  const frontSkillLi = document.querySelectorAll(".front_end_skill_list > li");
  const etcSkillLi = document.querySelectorAll(".etc_skill_list > li");
  const ssSvg = document.querySelector(".ss_title_svg");

  let frontSkillLiObserver = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.target instanceof HTMLElement) {
        if (item.isIntersecting) {
          item.target.style.opacity = '1';
        } else {
          item.target.style.opacity = '0';
        }
      }
    })
  });
  let etcSkillLiObserver = new IntersectionObserver((e) => {
    e.forEach((item) => {
      if (item.target instanceof HTMLElement) {
        if (item.isIntersecting) {
          item.target.style.opacity = '1';
        } else {
          item.target.style.opacity = '0';
        }
      }
    })
  });

  for (const item of frontSkillLi) {
    frontSkillLiObserver.observe(item);
  }
  for (const item of etcSkillLi) {
    etcSkillLiObserver.observe(item);
  }

  window.addEventListener('scroll', function() {
    let svgElement = document.querySelector('.ss_title_svg');
    let scrollHeight = window.scrollY;
    let windowHeight = window.innerHeight;

    console.log('scrollHeight: ', scrollHeight);
    if(svgElement instanceof HTMLElement) {
      
      if (scrollHeight > 2500) {
        svgElement.classList.add('animate');
      } else {
        if(svgElement.className === 'animate'){
          svgElement.classList.remove('animate');
        }
      }
    }
  });

  gsap.to('.ss_bg_text', {
    top: '0rem',
    scrollTrigger: {
      trigger: '#skill',
      start: 'top 85%',
      end: 'bottom 15%',
      scrub: 3, 
    }
  });



})