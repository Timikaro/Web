
$(".buttonStart").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".title-about").offset().top - 100
  }, 2000);
  

})

// var cekin = false;

// window.addEventListener("scroll", function () {
//   var scroll = $(window).scrollTop();
//   var trig = $(".containerSkill").offset().top - 300;
  
//   if(scroll >= trig && scroll <= trig+2){
//     moveSkill();
    
//   }
 
// })

function moveSkill() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".containerSkill").offset().top
}, 1000);
}
