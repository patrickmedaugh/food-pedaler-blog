$(document).ready(function() {
  $('.accordion').addClass('.hidden');
  $('.menu-icon').click(function() {
    console.log("yo");
    $('.accordion').slideToggle('fast');
  });
});
