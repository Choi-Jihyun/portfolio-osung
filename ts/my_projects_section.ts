document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');
  const grayLayer = document.querySelector("#gray_layer");
  const overLayer = document.querySelector("#over_layer");
  const projectView = document.querySelector('.project_view')
  const projectListWrapper = document.querySelector('.project_list');
  const projectLi = document.querySelectorAll('.project_list > li');
  const nextBtn = document.querySelector('.button-next'); 
  const prevBtn = document.querySelector('.button-prev');
  const olCloseBtn = document.querySelector("#ol_close_btn");
  const swiperInner = document.querySelector(".axios_swiper_wrapper");
  let slideNum: number = 0
  let previousSlideNum: number | null = null;
  let selectedSlide = projectLi[0];
  let isHoverOnView: boolean = false;
  
  

  init();
  initEvent();

  function init (): void {
    showProjectView();
    gsap.to(prevBtn?.children, {display: 'none', opacity: '0'})
  }

  function initEvent (): void {
    projectView?.addEventListener('mouseenter', hoverDetail);
    projectView?.addEventListener('mouseleave', leaveHoverDetail);
    nextBtn?.addEventListener('click', slideNextProject);
    prevBtn?.addEventListener('click', slidePrevProject);
    for (const item of projectLi){
      item.addEventListener('click', goThisProject);
    }
    grayLayer?.addEventListener('click', hideDetails); 
    olCloseBtn?.addEventListener('click', hideDetails); 
    document.addEventListener('keydown', (event)=> {if (event.key === "Escape") { hideDetails() }});
    
  }


  function slideNextProject () {
    gsap.set(prevBtn?.children, {display: 'block'})
    gsap.to(prevBtn?.children, {opacity: '1'})
    if (slideNum < projectLi.length - 1) {
      projectLi[slideNum].classList.remove('selected')
      slideNum ++;
      gsap.to(projectListWrapper, {left: `-${27 * slideNum}rem`});
      projectLi[slideNum].classList.add('selected')
    }
    if (slideNum == projectLi.length - 1) {
      gsap.to(nextBtn?.children, {opacity: '0', duration: 0.2})
    }
    showProjectView()
  }
  
  function slidePrevProject () {
    gsap.set(nextBtn?.children, {color: '#FF9900'})
    gsap.to(nextBtn?.children, {opacity: '1'})
    if (slideNum > 0) {
      projectLi[slideNum].classList.remove('selected')
      slideNum --;
      gsap.to(projectListWrapper, {left: `-${27 * slideNum}rem`});
      projectLi[slideNum].classList.add('selected')
    }
    if (slideNum == 0) {
      gsap.to(prevBtn?.children, {opacity: '0', duration: 0.2, onComplete: ()=>{
        gsap.set(prevBtn?.children, {display: 'none'})
      }})
    }
    showProjectView()
  }

  function goThisProject () {
    slideNum = getIndex(this);
    activateSlide(slideNum)
    showProjectView()
  }

  function getIndex(thisMenu:any){
    let selectedIndex = 0;
    while((thisMenu = thisMenu.previousElementSibling)!=null){
      selectedIndex++;
    }
    return selectedIndex;
  }

  function activateSlide(index:number){
    for (const item of projectLi) {
      item.classList.remove('selected');
    }
    selectedSlide=projectLi[index];
    selectedSlide.classList.add('selected');
    gsap.to(projectListWrapper, {left: `-${27 * slideNum}rem`});
    if (slideNum == 0) {
      gsap.to(nextBtn?.children, { opacity: '1', duration: 0.2 })
      gsap.to(prevBtn?.children, { opacity: '0', duration: 0.2 })
    } else if (slideNum == projectLi.length - 1) {
      gsap.to(prevBtn?.children, { opacity: '1', duration: 0.2 })
      gsap.to(nextBtn?.children, { opacity: '0', duration: 0.2 })
    } else {
      gsap.to(nextBtn?.children, { opacity: '1', duration: 0.2 })
      gsap.to(prevBtn?.children, { display: 'block'})
      gsap.to(prevBtn?.children, { opacity: '1', duration: 0.2 })
    }
  }

  function showProjectView():void {
    if (previousSlideNum === slideNum) {
      return;
    }
    if (projectView) {
      projectView.innerHTML = '';
      axios.get(`./project_content/project_overview0${slideNum + 1}.html`).then((response) => { 
        projectView.innerHTML = response.data;
        previousSlideNum = slideNum;
      }).catch((error: any) => {
        console.error(`error:`, error);
      });
    }
  }

  function showDetails() {
    showProjectDetail();

    if (body) {
      body.style.overflow = 'hidden'; 
    }
    gsap.set(grayLayer, { display:'block' })
    gsap.to(grayLayer,{ opacity: 0.9, duration: 0.5, ease: 'porwer1.out' });
    gsap.set(overLayer, { display: 'block' });
  }

  function hideDetails() {
    gsap.set(overLayer, {display:'none'});
    gsap.to(grayLayer, {opacity:0, duration:.1, ease:'power1.out', onComplete:()=>{
      if (grayLayer instanceof HTMLElement) {
        grayLayer.style.display='none';  
      }
      if (body) {
        body.style.overflow = 'auto';
      }
    }})
    // if (swiperInner) {
    //   swiperInner.innerHTML = '';
    // }
  }

  function hoverDetail () {
    const mouseoverDiv = document.querySelector('.mouseover');
    if (mouseoverDiv) {
      mouseoverDiv.addEventListener('click', showDetails)
      isHoverOnView = true;
      mouseoverDiv.innerHTML = "<img src='/images/more_detail.png' alt='자세히 보기'>";
      gsap.set(mouseoverDiv, { opacity: 0, display: 'block', onComplete: ()=> { 
        gsap.to(mouseoverDiv, { opacity: 1, duration: 0.3, onComplete: ()=> { 
          isHoverOnView = true;
        }});
      }})
    }
  }

  function leaveHoverDetail () {
      const mouseoverDiv = document.querySelector('.mouseover');
      if (mouseoverDiv) {
        gsap.to(mouseoverDiv, { opacity: 0, duration: 0.1, onComplete: ()=> {
          gsap.set(mouseoverDiv, { display: 'none', opacity: 0})
          mouseoverDiv.innerHTML = "";
          isHoverOnView = false;
        }}); 
      }
  }

  function showProjectDetail () {
    if (body) {
      body.style.overflow = 'hidden'; 
    }
    if (swiperInner) {
      swiperInner.innerHTML = '';
      axios.get(`./project_content/project_details/project_detail0${slideNum + 1}.html`).then((response) => { 
        swiperInner.innerHTML = response.data;
        previousSlideNum = slideNum;

        var swiper = new Swiper('.detail-slider > div', {
          spaceBetween: 30,
          effect: 'fade',
          loop: true,
          mousewheel: {
            invert: false,
          },
          autoHeight: true,
          pagination: {
            el: '.detail-slider__pagination',
            clickable: true,
          }
        });
      }).catch((error: any) => {
        console.error(`error:`, error);
      });
    }
  }

  function hideProjectDetail () {
    
  }

  const projectListLis = document.querySelectorAll('.project_list > li');

  window.addEventListener('scroll', scrollWindow);

  function scrollWindow(): void {
    let scrollHeight = window.scrollY;
    let criterionHeight: number = 4620;
    if (window.innerWidth < 1024 && window.innerWidth > 768) {
      criterionHeight = 4042;
    } else if (window.innerWidth <= 768) {
      criterionHeight = 3465;
    } else {
      criterionHeight = 4620;
    }
    
    if(scrollHeight > criterionHeight){
      for(let i: number = 0; i < projectListLis.length; i++){
        gsap.to(projectListLis[i], {y: 0, opacity: 1, delay: 0.2*i, duration: 1, ease: "power1.out"})
      }
    }
  }



});