if($(window).innerWidth() >= 450) {
      
    $(".container-error").css("display", "flex");
    $("body").css("position", "fixed");
    let iconForward = document.querySelector(".iconError");
    let animationForward = bodymovin.loadAnimation({
        container: iconForward,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "https://assets7.lottiefiles.com/packages/lf20_5itouifw.json"
    });

    animationForward.playSegments([0,45], true);

} else {

}