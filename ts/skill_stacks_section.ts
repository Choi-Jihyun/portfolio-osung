document.addEventListener('DOMContentLoaded', ()=>{
  const frontSkillLi = document.querySelectorAll(".front_end_skill_list > li");
  const etcSkillLi = document.querySelectorAll(".etc_skill_list > li");

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


})