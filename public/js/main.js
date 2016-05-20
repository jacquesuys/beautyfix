$(document).ready(function(){
  $.get('http://freegeoip.net/json/')
  .done(function(data){
    console.log(data);
  })
  .fail(function(err){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        // check if it is outside the geo bounds, assign to the UK
        console.log(position.coords.latitude + ' ' + position.coords.longitude);
      });
    }  
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