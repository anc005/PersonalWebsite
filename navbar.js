$(document).ready(function () {
    $('.menu-btn').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var popout = $('#mobile-menu');
        var popoutWidth = $('#mobile-menu').width();
        
        // toggle open class
        popout.addClass("open");
        
        // slide menu
        if (popout.hasClass("open")) {
            popout.animate({
                right: "0px"
            }); 
        } else {
            popout.animate({right: -popoutWidth}, 250);    
        }
    });
  
  $('.close-btn').on('click', function(event){
    event.preventDefault();
    var popout = $('#mobile-menu');
    var popoutWidth = $('#mobile-menu').width();
    
    popout.removeClass("open")
    
    if (popout.hasClass("open")) {
            popout.animate({
                right: "0px"
            }); 
        } else {
            popout.animate({right: - popoutWidth}, 250);    
        }
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