$(document).ready(function () {
    $('.menu-btn').on('click', function(event){
       
        // create menu variables
        var popout = $('#mobile-menu');
        var popoutWidth = $('#mobile-menu').width();
        
        // toggle open class
        popout.addClass("open");
        
        // slide menu
        if (popout.hasClass("open")) {

            // popout.show();
            popout.fadeIn(150);
            popout.animate({
                right: "0px"
            }); 
        // popout.animate({opacity: 1}, 1000);

        } 
        else {
            popout.animate({right: -popoutWidth}, 250);    
            popout.fadeOut(150);
        }

         event.preventDefault();
    });
  
  $('.close-btn').on('click', function(event){
    
    var popout = $('#mobile-menu');
    var popoutWidth = $('#mobile-menu').width();
    
    popout.removeClass("open")
    
    if (popout.hasClass("open")) {
            popout.animate({
                right: "0px"
            }); 
        popout.fadeOut(150);
        } 
        else {
            // popout.animate({opacity: 0.0}, 5000, 'linear', callback);
            popout.animate({right: -popoutWidth}, 250);    
            popout.fadeOut(150);
            // popout.hide();
        }
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