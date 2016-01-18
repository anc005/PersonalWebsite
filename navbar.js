$(document).ready(function () {
    // Scroll for Desktop Menu
    
     $("#Down").click(function() {
    $('html, body').animate({
        scrollTop: $("#AboutLink").offset().top 
    }, 870);
    event.preventDefault(); //Prevents page from flashing
});
      $("#logo").click(function() {
    $('html, body').animate({
        scrollTop: $("#Entrance").offset().top 
    }, 870);
    event.preventDefault(); //Prevents page from flashing
});

  $("#ADeskMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#AboutLink").offset().top + 1
    }, 870);
    event.preventDefault(); //Prevents page from flashing
});
    $("#PDeskMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#ProjectLink").offset().top - 88
    }, 870);
    event.preventDefault();
});
      $("#CDeskMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactLink").offset().top - 104
    }, 870);
    event.preventDefault();
});

      // Scroll for Mobile Menu
  $("#AMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#AboutLink").offset().top - 88
    }, 870);
    event.preventDefault();
});
    $("#PMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#ProjectLink").offset().top - 88
    }, 870);
    event.preventDefault();
});
      $("#CMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactLink").offset().top - 104
    }, 870);
    event.preventDefault();
});




    $('.menu-btn').on('click', function(event){
       
        // create menu variables
        var popout = $('#mobile-menu');
        var popoutWidth = $('#mobile-menu').width();
        
        // toggle open class
        popout.addClass("open");
        
        // slide menu
        // if (popout.hasClass("open")) {

            // popout.show();
            popout.fadeIn(150);
            popout.animate({
                right: "0px"
            }); 
        // popout.animate({opacity: 1}, 1000);

        // } 
        // else {
        //     popout.animate({right: -popoutWidth}, 250);    
        //     popout.fadeOut(150);
        // }

         // event.preventDefault();
    });
    
// $('.flex-item3').each(function() {
//   var link = $(this).html();
//   $(this).contents().wrap('<a href="https://tritonbattles.herokuapp.com/"></a>');
// });


  $("#AMenu, #PMenu, #CMenu, #mobile-menu").on('click', function(event){
    var popout = $('#mobile-menu');
    var popoutWidth = $('#mobile-menu').width();
    popout.removeClass("open");
    // if (popout.hasClass("open")) {
    //         popout.animate({
    //             right: "0px"
    //         }); 
    //     popout.fadeOut(150);
    //     } 
    //     else {
            // popout.animate({opacity: 0.0}, 5000, 'linear', callback);
            popout.animate({right: -popoutWidth}, 250);    
            popout.fadeOut(150);
            // popout.hide();
        // }
        event.preventDefault();
  });
});

$(document).ready(function() {
    var stickyNavTop = $('.Navigation').offset().top;
     
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
          
    if (scrollTop > stickyNavTop) { 
        $('.Navigation').addClass('sticky');
        $('.About').addClass('Content-Nav');
        // $('.Projects').addClass('Content-Nav');
        // $('.Contact_Me').addClass('Content-Nav');
    } else {
        $('.Navigation').removeClass('sticky'); 
        $('.About').removeClass('Content-Nav');
        // $('.Projects').removeClass('Content-Nav');
        // $('.Contact_Me').removeClass('Content-Nav');
    }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
        stickyNav();
    });
});