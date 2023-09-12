document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');
  const projectListWrapper = document.querySelector('.project_list');
  const projectViewWrapper = document.querySelector('.project_info_list')
  const projectViewLi = document.querySelectorAll('.project_info_list > li');
  const projectLi = document.querySelectorAll('.project_list > li');
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

  
  function showProjectView() {
    axios.get(`./project_content/project_overview0${slideNum + 1}.html`).then((response) => { 
      if (projectViewWrapper) {
        projectViewWrapper.innerHTML = response.data;
      }
    }).catch((error) => {
      console.error(`Failed to load project overview:`, error);
    });
  }

  // function showProjectView () {
  //   for (let i = 0; i < projectViewLi.length; i++) {
  //     const item = projectViewLi[i];
  //     item.classList.remove('selected');
      
  //     if (i === slideNum) {
  //       item.classList.add('selected');
  //       loadProjectOverview(`./project_content/project_overview0${i + 1}.html`, item);
  //     }
  //   }
  // }



  // function showProjectView () {
  //   for (const item of projectViewLi) {
  //     item.classList.remove('selected');
  //   }
  //   projectViewLi[slideNum].classList.add('selected');
  // }


  const grayLayer = document.createElement('div');
  grayLayer.id='grayLayer';
  const overLayer = document.createElement('div');
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
  }

  function hideImg() {
    gsap.set(overLayer, {display:'none'});
    gsap.to(grayLayer,{opacity:0, duration:.3, ease:'power1.out', onComplete:()=>{
      grayLayer.style.display='none';  
      if (body) {
        body.style.overflowY = 'auto';
      }
    }})
  }

});