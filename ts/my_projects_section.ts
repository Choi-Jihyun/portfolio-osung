document.addEventListener("DOMContentLoaded", () => {
  const projectListWrapper = document.querySelector('.project_list')
  const projectViewLi = document.querySelectorAll('.project_info_list > li')
  const projectLi = document.querySelectorAll('.project_list > li')
  const nextBtn = document.querySelector('.button-next');
  const prevBtn = document.querySelector('.button-prev');
  const inactiveColor: string = '#cccccc';
  const activeColor: string = '#FF9900';
  let slideNum: number = 0
  let selectedSlide = projectLi[0];

  nextBtn?.addEventListener('click', slideNextProject);
  prevBtn?.addEventListener('click', slidePrevProject);
  for (const item of projectLi){
    item.addEventListener('click', goThisProject);
  }
  gsap.set(prevBtn?.children, {color: inactiveColor})

  function slideNextProject () {
    gsap.set(prevBtn?.children, {color: '#FF9900'})
    if (slideNum < projectLi.length - 1) {
      projectLi[slideNum].classList.remove('selected')
      slideNum ++;
      gsap.to(projectListWrapper, {left: `-${27 * slideNum}rem`});
      projectLi[slideNum].classList.add('selected')
    }
    if (slideNum == projectLi.length - 1) {
      gsap.set(nextBtn?.children, {color: inactiveColor})
    }
    showProjectView()
  }
  
  function slidePrevProject () {
    gsap.set(nextBtn?.children, {color: '#FF9900'})
    if (slideNum > 0) {
      projectLi[slideNum].classList.remove('selected')
      slideNum --;
      gsap.to(projectListWrapper, {left: `-${27 * slideNum}rem`});
      projectLi[slideNum].classList.add('selected')
    }
    if (slideNum == 0) {
      gsap.set(prevBtn?.children, {color: inactiveColor})
    }
    showProjectView()
  }

  function goThisProject () {
    slideNum = getIndex(this);
    console.log('slideNum: ', slideNum);
    activateDot(slideNum)
    showProjectView()
  }

  function getIndex(thisMenu){
    let selectedIndex = 0;
    while((thisMenu = thisMenu.previousElementSibling)!=null){
      selectedIndex++;
    }
    return selectedIndex;
  }

  function activateDot(index){
    for (const item of projectLi) {
      item.classList.remove('selected');
    }
    selectedSlide=projectLi[index];
    selectedSlide.classList.add('selected');
    gsap.to(projectListWrapper, {left: `-${27 * slideNum}rem`});
    if (slideNum == 0) {
      gsap.set(nextBtn?.children, {color: activeColor})
      gsap.set(prevBtn?.children, {color: inactiveColor})
    } else if (slideNum == projectLi.length - 1) {
      gsap.set(prevBtn?.children, {color: activeColor})
      gsap.set(nextBtn?.children, {color: inactiveColor})
    } else {
      gsap.set(nextBtn?.children, {color: activeColor})
      gsap.set(prevBtn?.children, {color: activeColor})
    }
  }

  function showProjectView () {
    for (const item of projectViewLi) {
      item.classList.remove('selected');
    }
    projectViewLi[slideNum].classList.add('selected');
  }

});