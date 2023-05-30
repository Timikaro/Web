let section = document.querySelector('section');
let text = document.querySelector('.Text');
let innertext = document.querySelector('.innerText');
let buttonStart = document.querySelector(".buttonStart")


window.addEventListener('scroll', function () {
    let value = window.scrollY;
    section.style.clipPath = "circle(" + value + "px at center center)";
    text.style.left = 200 - value / 2 + "%";
    innertext.style.left = 200 - value / 2 + "%";
})

$(document).scroll(function () {
    var tinggiTrig = $(".containerSkill").offset().top;
    var scroll = $(window).scrollTop();
    var nilai = scroll - tinggiTrig;

    if (nilai <= 0) {
        if (scroll >= tinggiTrig - 700) {
        }
    }
});

// animation navbar title
var nav = document.querySelector(".containerMenuNav")
var titleNav = nav.querySelectorAll("div");


var textWrapper = document.querySelector('.m17 .letters ');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.m17 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.m17',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  var textWrapper = document.querySelector('.ml11 .letters-name');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, document.querySelector('.ml11 .letters-name').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml11',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    
      $(".container-pg1").ready(function () {
        
        var timeleft = 30;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
          } else {
            document.getElementById("notif-whatsapp").innerHTML = timeleft;
          }
          if (timeleft == 1) {
            $("#notif-whatsapp").addClass("animationNotifWa");
            $("#notif-insta").addClass("animationNotifInsta");
          }
          timeleft -= 1;
        }, 200);
      });
        
    
    
      window.addEventListener('scroll', function () {
      var nilaiT = false;
      let nilaisroll = window.scrollY;
      var nilaitinggiabout = $(".container-about").offset().top;
      if(nilaisroll >= nilaitinggiabout - 300 ){
        $(".containerIconNav").addClass("containerIconNav-show");
        $(".containerMenuNav").addClass("containerMenuNav-show");
        
         nilaiT = true;
      }else if(nilaisroll <= nilaitinggiabout - 50){
        $(".containerIconNav").removeClass("containerIconNav-show");
      }      
      
     
    })
    
    

  

 


  // icon menu for animation
  var btn = $('.btnIconMenuBar');

btn.on('click', function() {
  $(this).toggleClass('active not-activebtn');
  $(".containerMenuNav").toggleClass("active");
  $(".aboutMe").toggleClass("showTitleNav");
  $(".mySkill").toggleClass("showTitleNav");
  $(".latesWork").toggleClass("showTitleNav");
  // $("body").css("position", "fixed");
  
});

function moreDetail(){
  $(".moreDetail").click(function () { 
    $("#parag2").css("display", "block");
    $(".moreDetail").css("display", "none");
    
  });
}


function linkWa(){
  window.location.replace("https://wa.me/6285726583064");
}
function linkInsta(){
  window.location.replace("https://instagram.com/andika_nugh");
}
