$(document).ready(function () {
   $('.menu__burger').click(function (event) {
      $('.menu__burger,.menu__list,.header__button,.header__autorize').toggleClass('active');
      $('body').toggleClass('lock');
   });
});


$(document).ready(function () {
   $('.footer-column__label').click(function (event) {
      if ($('.main-footer__column').hasClass('one')) {
         $('.footer-column__label').not($(this)).removeClass('active');
         $('nav.footer-column__item').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next('nav.footer-column__item').slideToggle(300);
   });
});
