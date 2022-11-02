$(function (param) {
  $(window).on('scroll', function (param) {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("navsticky");

    } else {
      $(".navbar").removeClass("navsticky");

    }
  })




  var typed = new Typed('.element', {
    strings: ['ONLINE COURSE', 'DO SOMETHING'],
    smartBackspace: true,
    typeSpeed: 100,
    loop: true,
    backDelay: 1000,
    loopCount: Infinity,
  });



  $(".banner").ripples({
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.04,
    interactive: true,
    crossOrigin: "",
  });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // color changer

  $(".colorchanger-icon").on('click', function (param) {
    $(".color-changer").toggleClass('changershow');
  })


  $(".changericon").each(function (param) {
    $(this).on('click', function (param) {
      let color = $(this).attr('data-color');
      document.documentElement.style.setProperty('--red', color);
    })
  })


  var mixer = mixitup('.gallery');


})

new kursor({
  type: 1
})