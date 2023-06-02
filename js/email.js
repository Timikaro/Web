$(".shape").click(function () { 
    $(".formEmail").addClass("formEmail-active");
    // $("body").css("position", "fixed");
    
});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

const nameInput = document.querySelector("#nameClient")
const email = document.querySelector("#emailClient")
const message = document.querySelector("#message")
const errorNodes = document.querySelectorAll(".error")

var h=(new Date()).getHours();
if (h >= 4 && h < 10) var gettime = "Pagi";
if (h >= 10 && h < 15) var gettime = "Siang";
if (h >= 15 && h < 18) var gettime = "Sore";
if (h >= 18 || h < 4) var gettime = "Malam";


function sendMail() {
  
  var params = {
    name: document.getElementById("nameClient").value,
    time : gettime,
    email: document.getElementById("emailClient").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_hgjduaa";
  const templateID = "template_dbawnxu";

    emailjs.send(serviceID, templateID, params)
    .then(
        res=>{
        document.getElementById("nameClient").value = "";
        document.getElementById("emailClient").value = "";
        gettime.value = "";
        document.getElementById("message").value = "";
        console.log(res);
        $(".container-popup").addClass("container-popup-active");
    })
    .catch(err=>console.log(err));
}

//  lottie animaiton 
/* Play an animation on each click */
let iconSkipForward = document.querySelector('.bodymovinanim');
let iconSendForward = document.querySelector('.movePlane');
let iconCloseForward = document.querySelector('.closeMenu');

    let animationSkipForward = bodymovin.loadAnimation({
        container: iconSkipForward,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets9.lottiefiles.com/packages/lf20_jbrw3hcz.json"
    });

    
let animationSendForward = bodymovin.loadAnimation({
        container: iconSendForward,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets6.lottiefiles.com/private_files/lf30_nsqfzxxx.json"
});
let animationCloseForward = bodymovin.loadAnimation({
        container: iconCloseForward,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "/icon/svg/iconMenu.json"
});

function clearInput(){
    var getValueName= document.getElementById("nameClient");
    var getValueEmail= document.getElementById("emailClient");
    var getValueMsg= document.getElementById("message");
      if (getValueName.value !="") {
          getValueName.value = "";
          getValueEmail.value = "";
          getValueMsg.value = "";
      }
}

function cekpopup(value) {
    if (value == "Y") {
        clearInput();
        animationSendForward.playSegments([0,10], true);
        $(".container-popup").removeClass("container-popup-active");
    } else if(value == "N"){
        $(".container-popup").removeClass("container-popup-active");
        $(".formEmail").removeClass("formEmail-active");
         $("body").css("position", "relative");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".title-about").offset().top + 100
        }, 1000);
        
    }
}

function validateForm() {
    clearMessages()
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerHTML = "Name cannot be blank";
        errorFlag = true;
    } 
    if(!emailIsValid(email.value)){
        errorNodes[1].innerHTML = "Invalid email address";
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[2].innerHTML = "Message cannot be blank";
        errorFlag = true;
    } 
    if (!errorFlag) {
        // sendMail()
        animationSendForward.playSegments([0,60], true);
        $(".container-popup").addClass("container-popup-active");
        setTimeout(() => {
            animationSkipForward.playSegments([0,45], true);
          }, 1000);
        }
    if (errorFlag == false) {
        sendMail();
    }else{
        console.log("email anda tidak valid")
    }

    }
    
function closeMenu() {       
        // animationCloseForward.playSegments([0,50], true);
        $(".containerMenuNav").toggleClass("slide");
        animationCloseForward.playSegments([0,50], true);
}

$("#close").click(function() {
    $(".formEmail").removeClass("formEmail-active");
    $("body").css("position", "relative");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".title-about").offset().top + 100
    }, 1000);
});


function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerHTML = "";
        
    }
}

function emailIsValid(email) { 
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return regex.test(email);
 }

