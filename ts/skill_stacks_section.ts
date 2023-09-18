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

    if(svgElement instanceof HTMLElement) {
      console.log(scrollHeight);
      if (scrollHeight > 1832) { // 화면의 높이의 45%가 넘었을 때
          svgElement.classList.add('animate'); // animate 클래스 추가
      } else {
          svgElement.classList.remove('animate'); // 그 외 경우 animate 클래스 제거
      }
    }
});


})