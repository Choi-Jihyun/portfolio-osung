document.addEventListener('DOMContentLoaded', ()=>{
  const frontSkillLi = document.querySelectorAll(".front_end_skill_list > li");
  const etcSkillLi = document.querySelectorAll(".etc_skill_list > li");
  const ssSvg = document.querySelector(".ss_title_svg");

  const frontSkillLiObserver = new IntersectionObserver((e) => {
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
  const etcSkillLiObserver = new IntersectionObserver((e) => {
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
  const ssSvgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target instanceof Element) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.right = '0';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.right = '-300px';
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
  if(ssSvg) {
    ssSvgObserver.observe(ssSvg);
  }


  gsap.to('.ss_bg_text', {
    top: '6rem',
    scrollTrigger: {
      trigger: '#skill',
      start: 'top 55%',
      end: 'bottom 0%',
      scrub: 3, 
    }
  });



})