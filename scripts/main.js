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
              { type: "video/mp4",  src: "video/test.mp4" },
              { type: "video/webm", src: "video/test.webm" },
              { type: "video/ogg",  src: "video/test.ogv" }
            ], { controls:false, doLoop:false, ambient:true });

          BV.getPlayer().on('loadeddata', function() {
              onVideoLoaded();
          });

          BV.getPlayer().on("ended", function(){
            $("#big-video-vid_html5_api").fadeOut("slow");
            $('body').backstretch("video/mainPoster.png", {target: '#mainPoster', positionType: 'absolute'});

          });

          $bigImage
            .css('position','relative')
            .imagesLoaded(adjustImagePositioning);
              // and on window resize

          $(window).on('resize', adjustImagePositioning);


        } else {

          BV.show('video/poster.png');

        }

function showVideo() {

    BV.show($('#homeVideo').attr('data-video'),{ambient:true});

}

function onVideoLoaded() {
    $('#homeVideo-'+screenIndex).find('.homeVideo').transit({'opacity':0},200)
}


function adjustImagePositioning() {
    $bigImage.each(function(){
        var $img = $(this),
            img = new Image();

        img.src = $img.attr('src');

        var windowWidth = $window.width(),
            windowHeight = $window.height(),
            r_w = windowHeight / windowWidth,
            i_w = img.width,
            i_h = img.height,
            r_i = i_h / i_w,
            new_w, new_h, new_left, new_top;

        if( r_w > r_i ) {
            new_h   = windowHeight;
            new_w   = windowHeight / r_i;
        }
        else {
            new_h   = windowWidth * r_i;
            new_w   = windowWidth;
        }

        $img.css({
            width   : new_w,
            height  : new_h,
            left    : ( windowWidth - new_w ) / 2,
            top     : ( windowHeight - new_h ) / 2
        })

    });

}

$bigImage
    .css('position','relative')
    .imagesLoaded(adjustImagePositioning);
// and on window resize
$(window).on('resize', adjustImagePositioning);


  });
