(function($) {
    var selector = ".pageSnap";

    var $slides = $(selector);

    var currentSlide = 0;
    var isAnimating = false;

    var stopAnimation = function() {
        setTimeout(function() {
            isAnimating = false;
        }, 500);
    };

    var bottomIsReached = function($elem) {
        var rect = $elem[0].getBoundingClientRect();
        return rect.bottom <= $(window).height() - 100;
    };

    var topIsReached = function($elem) {
        var rect = $elem[0].getBoundingClientRect();
        return rect.top >= 500;
    };

    document.addEventListener(
        "wheel",
        function(event) {
            var $currentSlide = $($slides[currentSlide]);

            if (isAnimating) {
                event.preventDefault();
                return;
            }

            var direction = -event.deltaY;

            if (direction < 0) {
                // next
                if (currentSlide + 1 >= $slides.length) return;
                if (!bottomIsReached($currentSlide)) return;
                event.preventDefault();
                currentSlide++;
                var $slide = $($slides[currentSlide]);
                var offsetTop = $slide.offset().top;
                isAnimating = true;
                $("html, body").animate({
                        scrollTop: offsetTop
                    },
                    1200,
                    stopAnimation
                );
            } else {
                // back
                if (currentSlide - 1 < 0) return;
                if (!topIsReached($currentSlide)) return;
                event.preventDefault();
                currentSlide--;
                var $slide = $($slides[currentSlide]);
                var offsetTop = $slide.offset().top;
                isAnimating = true;
                $("html, body").animate({
                        scrollTop: offsetTop
                    },
                    1200,
                    stopAnimation
                );
            }
        }, { passive: false }
    );
})(jQuery);