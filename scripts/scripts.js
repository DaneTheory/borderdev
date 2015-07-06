//VIDEO BACKGROUND
$( document ).ready(function() {
// Instantiate Video Background For Homepage
    var screenIndex = 1,
        numScreens = $('.homeVideo').length,
        isTransitioning = false,
        transitionDur = 1000,
        BV,
        videoPlayer,
        isTouch = Modernizr.touch,
        $bigImage = $('.mainPoster'),
        $window = $(window);

        if (!isTouch) {

          // initialize BigVideo
          //BV = new $.BigVideo({forceAutoplay:isTouch});
          var BV = new $.BigVideo({useFlashForFirefox:false});
          BV.init();
          //showVideo();

          BV.show([
              { type: "video/mp4",  src: "video/bgVid.mp4" },
              { type: "video/webm", src: "video/bgVid.webm" },
              { type: "video/ogg",  src: "video/bgVid.ogv" }
            ], { controls:false, doLoop:false, ambient:true });

          // BV.getPlayer().on('loadeddata', function() {
          //     onVideoLoaded();
          // });

          BV.getPlayer().on("ended", function(){
            var player =   BV.getPlayer();
            player.pause();
            BV.show('video/bgPoster.png');

            $(".hero").fadeIn({queue: false, duration: 'slow'});
            $(".hero").animate({ opacity: "1" }, 'slow');
          });

          // $bigImage
          //   .css('position','relative')
          //   .imagesLoaded(adjustImagePositioning);
          //     // and on window resize
          //
          // $(window).on('resize', adjustImagePositioning);


        } else {

          BV.show('video/poster.png');

        }

// function showVideo() {
//
//     BV.show($('#homeVideo').attr('data-video'),{ambient:true});
//
// }
//
// function onVideoLoaded() {
//     $('#homeVideo-'+screenIndex).find('.homeVideo').transit({'opacity':0},200)
// }

//
// function adjustImagePositioning() {
//     $bigImage.each(function(){
//         var $img = $(this),
//             img = new Image();
//
//         img.src = $img.attr('src');
//
//         var windowWidth = $window.width(),
//             windowHeight = $window.height(),
//             r_w = windowHeight / windowWidth,
//             i_w = img.width,
//             i_h = img.height,
//             r_i = i_h / i_w,
//             new_w, new_h, new_left, new_top;
//
//         if( r_w > r_i ) {
//             new_h   = windowHeight;
//             new_w   = windowHeight / r_i;
//         }
//         else {
//             new_h   = windowWidth * r_i;
//             new_w   = windowWidth;
//         }
//
//         $img.css({
//             width   : new_w,
//             height  : new_h,
//             left    : ( windowWidth - new_w ) / 2,
//             top     : ( windowHeight - new_h ) / 2
//         })
//
//     });
//
// }

// $bigImage
//     .css('position','relative')
//     .imagesLoaded(adjustImagePositioning);
// // and on window resize
// $(window).on('resize', adjustImagePositioning);


  });

  $(document).ready(function() {
		$(".flip").click(function() {
			$(this).parent().next().slideToggle(200);
		});
	});

//FLEXSLIDER
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
  });
});
$(window).load(function() {
  $(function() {
    var pull = $('#pull');
    var menu = $('nav ul');

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  });
  $(window).resize(function() {
    var menu = $('nav ul');
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});


//OVERLAYS
$(document).ready(function() {
  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".effects .img").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".effects .img").mouseenter(function() {
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  }
});


// SMOOTH NAV SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


// WAYPOINTS
$(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated bounceInRight');
  }, {
    offset: '85%'
  });

  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated bounceInLeft');
  }, {
    offset: '85%'
  });

  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInUp');
  }, {
    offset: '85%'
  });

});
