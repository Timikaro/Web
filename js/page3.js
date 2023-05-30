$(document).ready(function () {
    

var fotoku = $(".fotoku");

window.addEventListener('scroll', function () {

    var scroll = $(window).scrollTop();
    var offsetContainerP3 = $(".containerSkill").offset().top;
    
    var start = offsetContainerP3 - 200;
    var animItem = offsetContainerP3 ;
  
    if (scroll >= start) {
        $(".circle3").addClass("circle3-active");
        $(".circle2").addClass("circle2-active");
        $(".circle1").addClass("circle1-active");
        $(".letterM").addClass("letterM-active");
        $(".letterSkill").addClass("letterSkill-active");
        $(".letterY").addClass("letterY-active");
        $(fotoku).addClass("fotoku-active");   
    } else{
        
        $(".ai").attr("data-aos", "fade-up-left");
        $(".ps").attr("data-aos", "fade-up-right");
        $(".js").attr("data-aos", "fade-left");
        $(".html").attr("data-aos", "fade-up");
        $(".css").attr("data-aos", "fade-down-right");
        $(".figma").attr("data-aos", "fade-right");
        $(".react").attr("data-aos", "fade-down-left");
         $(".circle3").removeClass("circle3-active");
         $(".circle2").removeClass("circle2-active");
         $(".circle1").removeClass("circle1-active");
         $(fotoku).removeClass("fotoku-active");
         $(".letterM").removeClass("letterM-active");
         $(".letterSkill").removeClass("letterSkill-active");
         $(".letterY").removeClass("letterY-active");
    }

    AOS.refreshHard();
})

AOS.init({
    easing: 'ease-out-back',
    duration: 500,
    delay: 1000,
   
});

});