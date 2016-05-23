$(document).ready(function(){
  var $location = sessionStorage.getItem('country');

  if (!$location) {
    // fallback: http://ip-api.com/json
    $.get('http://freegeoip.net/json/')
    .done(function(data){
      console.log(data);
      var country = data["country_name"];
      sessionStorage.setItem('country', country);
    })
    .fail(function(err){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          // check if it is outside the geo bounds, assign to the UK
          console.log(position.coords.latitude + ' ' + position.coords.longitude);
        });
      }  
    });
  }

  $('header > span').on('click', function(){
    $('body').toggleClass('nav-open');
  });

  $(window).resize(function(){
    if ($(window).width() >= 640) {
      $('body').removeClass('nav-open');
    }
  });

  var showStockists = function() {
    // if not ZA show UK
    var $location = sessionStorage.getItem('country');
    if ($location !== "South Africa") {
      $('.za').hide();
      $('.uk').show();
    } else {
      $('.za').show();
      $('.uk').hide();
    }
    $('.region > span a').removeClass('active');
    $('.region > span').find("[data-country='" + $location + "']").addClass('active');
  };

  showStockists();

  $('.region > span a').on('click', function(e){
    e.preventDefault();
    var country = $(this).data('country');
    sessionStorage.setItem('country', country);
    showStockists();
  });

});