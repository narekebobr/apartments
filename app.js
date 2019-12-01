document.addEventListener('DOMContentLoaded', function() {
  var currentIndex = 0;
  var gallery = document.querySelectorAll('.gallery img');

  function showSlide() {
    document.querySelector('main .js-gallery img.active').classList.remove('active');
    document.querySelector('main .js-gallery img[data-index="' + currentIndex + '"]').classList.add('active');
  }

  for (var i = 0; i < gallery.length; i++) {
    var img = document.createElement('img');
    img.src = 'n/' + i + '.jpg';
    img.setAttribute('data-index', i);
    document.querySelector('main .js-gallery').appendChild(img);
    gallery[i].addEventListener('click', function (e) {
      currentIndex = parseInt(e.target.getAttribute('data-index'), 10);
      document.querySelector('main .js-gallery').classList.toggle('show');
      document.querySelector('main .js-gallery img[data-index="' + e.target.getAttribute('data-index') + '"]').classList.toggle('active');
    }, false);
  }

  document.querySelector('.js-gallery__close').addEventListener('click', function () {
    document.querySelector('main .js-gallery img.active').classList.remove('active');
    document.querySelector('main .js-gallery.show').classList.remove('show');
  }, false);
  document.querySelector('.js-gallery__left').addEventListener('click', function () {
    currentIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    showSlide();
  }, false);
  document.querySelector('.js-gallery__right').addEventListener('click', function () {
    currentIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    showSlide();
  }, false);
});