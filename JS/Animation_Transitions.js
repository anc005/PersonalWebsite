// Animations for transitions
$(window).scroll(function() {
    //Slide in
    $('#Goal').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + ($(window).height()/8)) {
            $(this).addClass("slideUp");
        }
    });

    //Fade
    $('#ProfilePic, #Resume_Button, #Education, #AboutInfo, li').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + ($(window).height()/8)) {
            $(this).addClass("fadeIn");
        }
    });

});