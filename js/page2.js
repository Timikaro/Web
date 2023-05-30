
var titleNet = $(".net-title").offset().top;
var titleUi = $(".ui-title").offset().top;
var titlegrp = $(".grp-title").offset().top;
var containerPage2 = $(".container-page2").offset().top;
var containerPage3 = $(".containerSkill").offset().top;
var start = titleNet - 300;
var end = containerPage3

var icon = $(".icon");


window.addEventListener("scroll", function () {
var scroll = $(window).scrollTop();
var value = scroll - containerPage2;


var num = $(".number");
var numbers = document.querySelectorAll(".number")
var titles = document.querySelectorAll(".title")
var icons = document.querySelectorAll(".icon")

var numberHeights = [];


for (let i = 0; i < num.length; i++) {
  numberHeights[i] = $(numbers[i]).offset().top;
}

for (let i = 0; i < num.length; i++) {

  if (scroll >= numberHeights[i] - 500 && scroll <= numberHeights[i] + 100) {
    $(numbers[i]).addClass("number-active");
    $(titles[i]).addClass("title-active");
    $(icons[i]).addClass("icon-active");
    
      }else{
      $(numbers[i]).removeClass("number-active");
      $(titles[i]).removeClass("title-active");
      $(icons[i]).removeClass("icon-active");
      
        }    
}

});

