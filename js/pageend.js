let quickMenu = $(".quick");

buttonQuicks = [];

for (let i = 0; i < quickMenu.length; i++) {
    buttonQuicks[i] = quickMenu[i];
    
    $(buttonQuicks[i]).click(function () { 
        var text = buttonQuicks[i].textContent;
        if (text == "Home" ) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".container-pg1").offset().top -100
            }, 1000);
        }else if (text == "About" ) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".container-about-art-old").offset().top
            }, 1000);
            
        }else if (text == "Lates" ) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".page4").offset().top
            }, 1000);
        }else if (text == "Email" ) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".container-about-art-old").offset().top
            }, 1000);
            
        }
        
    });
    
}

