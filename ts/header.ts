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
  // window.addEventListener('scroll', runningOsung);

  function scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth',});
  }

  function scrollToSection(event: Event) {
    const targetId = (event.target as HTMLElement).getAttribute('data-target');
    if (targetId !== null) {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  function highlightSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop - 10 && scrollPosition < sectionBottom) {
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