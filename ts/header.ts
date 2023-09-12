document.addEventListener('DOMContentLoaded', ()=>{
  const osungLogo = document.querySelector("#logo");
  const menuLists = document.querySelectorAll(".menu_list > li");
  const headerSvg = document.querySelector(".menu > svg");
  const headerSvgColors = document.querySelectorAll(".menu > svg > path");
  const sections = document.querySelectorAll('section');

  osungLogo?.addEventListener('click', scrollToTop)
  menuLists.forEach((menuItem) => {
      menuItem.addEventListener('click', scrollToSection);
  });
  window.addEventListener('scroll', highlightSection);

  moveSvg();
  function moveSvg() {
    gsap.to(headerSvg, { left: '10rem', transform:' scaleX(0.7)' });
    gsap.to(headerSvgColors,{ delay: 0.2, fill:"#003CFF" });
  }

  function scrollToTop(event: Event) {
    event.preventDefault(); // Prevent the default anchor behavior

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  }

  function scrollToSection(event: Event) {
    const targetId = (event.target as HTMLElement).getAttribute('data-target');
    if (targetId !== null) {
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        menuLists.forEach((menuItem) => {
            menuItem.classList.remove('selected');
        });
        (event.target as HTMLElement).classList.add('selected');
      }
    }
  }

  function highlightSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight + 30;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const targetId = section.id;
        menuLists.forEach((menuItem) => {
          if (menuItem.getAttribute('data-target') === targetId) {
              menuItem.classList.add('selected');
          } else {
              menuItem.classList.remove('selected');
          }
        });
      }
    });
  }

})