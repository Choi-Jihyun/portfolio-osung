"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector('#detail_content_wrapper');
  var content = document.querySelector('#detail_content');
  var scrollbar = document.querySelector('.custom-scrollbar');
  var thumb = document.querySelector('.custom-scrollbar-thumb'); // Set scrollbar height

  var scrollbarHeight = container.offsetHeight / content.offsetHeight * container.offsetHeight;
  thumb.style.height = "".concat(scrollbarHeight, "px"); // Scroll event handler

  container.addEventListener('scroll', function () {
    var y = container.scrollTop / content.offsetHeight * (container.offsetHeight - parseInt(thumb.style.height));
    thumb.style.top = "".concat(y, "px");
  }); // Click and drag event handler

  thumb.onmousedown = function (e) {
    var startY = e.clientY - thumb.offsetTop;

    document.onmousemove = function (e) {
      var y = e.clientY - startY,
          maxTop = container.offsetHeight - thumb.offsetHeight;
      if (y > maxTop) y = maxTop;
      if (y < 0) y = 0;
      container.scrollTop = y / maxTop * (content.scrollHeight - container.scrollHeight);
      return false;
    };

    document.onmouseup = function () {
      this.onmousemove = null;
    };
  };
});