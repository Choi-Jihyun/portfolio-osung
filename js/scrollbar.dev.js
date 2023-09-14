"use strict";

$(document).ready(function () {
  var container = $('.scroll-container'),
      content = $('.scroll-content'),
      scrollbar = $('.custom-scrollbar'),
      thumb = $('.custom-scrollbar-thumb'); // Set scrollbar height

  var scrollbarHeight = container.height() / content.height() * container.height();
  thumb.height(scrollbarHeight); // Scroll event handler

  container.on('scroll', function () {
    var y = container.scrollTop() / content.height() * (container.height() - thumb.height());
    thumb.css('top', y + 'px');
  }); // Click and drag event handler

  thumb.on('mousedown', function (e) {
    var startY = e.pageY - thumb.position().top;
    $(window).on('mousemove', function (e) {
      var y = e.pageY - startY,
          maxTop = container.height() - thumb.outerHeight();
      if (y > maxTop) y = maxTop;
      if (y < 0) y = 0;
      container.scrollTop(y / maxTop * (content.outerHeight() - container.outerHeight()));
      return false;
    }).on('mouseup', function () {
      $(this).off("mousemove");
    });
  });
});