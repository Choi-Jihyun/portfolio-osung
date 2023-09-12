document.addEventListener("DOMContentLoaded", () => {
  const projectListWrapper = document.querySelector('.project_list') as HTMLElement;
  const projectViewLi = document.querySelectorAll('.project_info_list > li') as NodeListOf<HTMLElement>;
  const projectLi = document.querySelectorAll('.project_list > li') as NodeListOf<HTMLElement>;
  const nextBtn = document.querySelector('.button-next') as HTMLElement; 
  const prevBtn = document.querySelector('.button-prev') as HTMLElement;
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
    activateSlide(slideNum)
    showProjectView()
  }

  function getIndex(thisMenu){
    let selectedIndex = 0;
    while((thisMenu = thisMenu.previousElementSibling)!=null){
      selectedIndex++;
    }
    return selectedIndex;
  }

  function activateSlide(index){
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


  const grayLayer=document.createElement('div');
  grayLayer.id='grayLayer';
  const overLayer=document.createElement('div');
  overLayer.id='overLayer';

  const projectMainImg = document.querySelectorAll('.project_main_pic > img') as NodeListOf<HTMLElement>; 

  for(const item of projectMainImg){ 
    item.addEventListener('click', showImg);
  }
  
  grayLayer.addEventListener('click', hideImg); 
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      hideImg();
    }
  });
  
  
  function showImg() {
    if (grayLayer && overLayer) {
      const body = document.querySelector('body');
      if (body) {
        body.style.overflowY = 'hidden'; 
        body.append(grayLayer);
        body.append(overLayer);
      }
    }
    gsap.set(grayLayer, { display:'block' })
    gsap.to(grayLayer,{ opacity: 0.9, duration: 0.3, ease: 'porwer1.out' });
    gsap.set(overLayer, { display: 'block' });

    let checkMenu = this; // 클릭한 이미지메뉴를 순번을 체크할 checkMenu에 대입 
    let selectedIndex = 0; // 클릭한 이미지 순번을 대입할 변수 

    while((checkMenu=checkMenu.previousElementSibling)!=null){ // 클릭한 이미지 메뉴의 순번구함 
      selectedIndex++;
    }

    overLayer.innerHTML = ""
    // 클릭한 이미지 메뉴 순번과 같은 이미지 번호의 큰이미지 생성하여 overLayer에 바로 넣어줌 
    // 중요) innerHTML 속성값으로 바로 넣어준다. (안에 있는 요소는 모두 지우고 새로운 요소를 넣어줌)
  }

  function hideImg() {
    gsap.set(overLayer, {display:'none'});
    gsap.to(grayLayer,{opacity:0, duration:.3, ease:'power1.out', onComplete:()=>{
      grayLayer.style.display='none';  
      const body = document.querySelector('body');
      if (body) {
        body.style.overflowY = 'auto'; // 세로 스크롤을 다시 활성화
      }
    }})
  }

});