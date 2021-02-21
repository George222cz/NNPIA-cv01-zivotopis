function bindEvent() {
    $("#hero-button").click(function() {
        $('html, body').animate({scrollTop: $('section.content-section').offset().top-60 }, 'slow');
        return false;
    });
}