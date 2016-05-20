$(document).ready(function(){
  $.get('http://freegeoip.net/json/')
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    console.log(err);
  });

  $('header > span').on('click', function(){
    $('body').toggleClass('nav-open');
  });

  $(window).resize(function(){
    if ($(window).width() >= 640) {
      $('body').removeClass('nav-open');
    }
  });

});