$(window).scroll(function(event) {
    var top = $(this).scrollTop();
    if (top >= 450) {
        $(".navigation").addClass('fixed');
    } else {
        $(".navigation").removeClass('fixed');
    }
});