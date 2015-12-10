$(document).ready(function() {
  $('.accordion').hide();
  $('.menu-icon').click(function() {
    $('.accordion').slideToggle('fast');
  });
});
