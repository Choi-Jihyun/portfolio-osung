document.addEventListener("DOMContentLoaded", () => {
  const projectListWrapper = document.querySelector('.project_list')
  const projectLi = document.querySelectorAll('.project_list > li')
  const nextBtn = document.querySelector('.button-next');
  const prevBtn = document.querySelector('.button-prev');
  let slideNum: number = 0
  const inactiveColor: string = '#cccccc';
  const activeColor: string = '#FF9900';

  nextBtn?.addEventListener('click', goNextProject);
  prevBtn?.addEventListener('click', goPrevProject);

  gsap.set(prevBtn?.children, {color: inactiveColor})

  function goNextProject () {
    gsap.set(prevBtn?.children, {color: '#FF9900'})
    if (slideNum < projectLi.length - 1) {
      projectLi[slideNum].classList.remove('selected')
      slideNum ++;
      gsap.to(projectListWrapper, {left: `-${28 * slideNum}rem`});
      projectLi[slideNum].classList.add('selected')
    }
    if (slideNum == projectLi.length - 1) {
      gsap.set(nextBtn?.children, {color: inactiveColor})
    }
  }
  
  function goPrevProject () {
    gsap.set(nextBtn?.children, {color: '#FF9900'})
    if (slideNum > 0) {
      projectLi[slideNum].classList.remove('selected')
      slideNum --;
      gsap.to(projectListWrapper, {left: `-${28 * slideNum}rem`});
      projectLi[slideNum].classList.add('selected')
    }
    if (slideNum == 0) {
      gsap.set(prevBtn?.children, {color: inactiveColor})
    }
  }
});