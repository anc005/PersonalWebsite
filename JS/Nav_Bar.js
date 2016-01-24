//Displays active element in navigation bar - Desktop

//check the pages when scroll event occurs
$(window).scroll(function(){

    // Get the current vertical position of the scroll bar
    position = $(this).scrollTop();
    $('.desktop li a[href^="#"]').each(function(){
          var anchorId = $(this).attr('href'); 
           var target = $(anchorId).offset().top;
           // check if the document has crossed the page
        // console.log(position + 100,target);
        if((position +100)>=target){

             //remove active from all anchor and add it to the clicked anchor
            $('.desktop li a[href^="#"]').removeClass("active")
             // event.preventDefault();
            $(this).addClass('active'); 
        }
    })

})

        
//Connecting navigation bar elements to their respected place in the page
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
            scrollTop: $("#ContactLink").offset().top - 88
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
            scrollTop: $("#ContactLink").offset().top - 88
        }, 870);
        event.preventDefault();
    });



    //Mobile menu pop in after click of menu button
    $('.menu-btn').on('click', function(event){
       
        // create menu variables
        var popout = $('#mobile-menu');
        var popoutWidth = $('#mobile-menu').width();
        
        // toggle open class
        popout.addClass("open");
        
        // slide menu
        popout.fadeIn(150);
        popout.animate({
            right: "0px"
        }); 
    });

    //Mobile menu click of respected element
    $("#AMenu, #PMenu, #CMenu, #mobile-menu").on('click', function(event){
        var popout = $('#mobile-menu');
        var popoutWidth = $('#mobile-menu').width();
        popout.removeClass("open");

        popout.animate({right: -popoutWidth}, 250);    
        popout.fadeOut(150);

        event.preventDefault();
      });
    });

//Desktop menu - Show only after scroll to certain point from entrance
$(document).ready(function() {
    var stickyNavTop = $('.Navigation').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        if (scrollTop > (stickyNavTop - $(window).height()/15)) { 
            $('.Navigation').addClass('sticky');
            $('.About').addClass('Content-Nav');
        } 
        else {
            $('.Navigation').removeClass('sticky'); 
            $('.About').removeClass('Content-Nav');
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
        stickyNav();
    });
});