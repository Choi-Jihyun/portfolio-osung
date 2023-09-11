"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var projectListWrapper = document.querySelector('.project_list');
  var nextBtn = document.querySelector('.button-next');
  var prevBtn = document.querySelector('.button-prev');

  function goNextProject() {
    gsap.to(projectListWrapper, {
      left: '-28rem'
    });
    console.log('나 선택됨');
  }

  nextBtn.addEventListener('click', goNextProject);
});