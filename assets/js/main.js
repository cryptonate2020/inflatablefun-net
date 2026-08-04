document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Product gallery thumbnail switching
  var mainImg = document.querySelector('.product-gallery .main-image');
  var thumbs = document.querySelectorAll('.product-gallery .thumbs img');
  if (mainImg && thumbs.length) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        mainImg.src = thumb.src;
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      });
    });
  }
});
