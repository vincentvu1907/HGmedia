jQuery(document).ready(function($) {
    // Navigation
    $(".list-item-mobile.has-sub").click(function(event) {
        if ($(this).hasClass('active')) {
            $(this).children('.sub-item-mobile').slideUp(300);
            $(this).removeClass('active');
        } else {
            $(this).children('.sub-item-mobile').slideDown(300);
            $(this).addClass('active');
        }
    });
    $(".collapse-menu-mobile").click(function(event) {
        if ($(".navigation-left").hasClass('active')) {
            $(".momo").removeClass('active');
            $(".navigation-left").removeClass('active');
        } else {
            $(".momo").addClass('active');
            $(".navigation-left").addClass('active');
        }
    });
    $(".momo").click(function(event) {
        $(".momo").removeClass('active');
        $(".navigation-left").removeClass('active');
    });
    $(".close-nav-left").click(function(event) {
        $(".momo").removeClass('active');
        $(".navigation-left").removeClass('active');
    });
    $(".close-search").click(function(event) {
        $(".search").removeClass('active')
    })
    $(".open-search").click(function(event) {
        $(".search").addClass('active')
    })

});

$(window).scroll(function(event) {
    var path = location.pathname.substring(1);
    var top = $(this).scrollTop();
    if (path == "") {
        if (top >= 450) {
            $(".navigation").addClass('fixed');
        } else {
            $(".navigation").removeClass('fixed');
        }
    } else {
        if (top >= 60) {
            $(".navigation").addClass('fixed');
        } else {
            $(".navigation").removeClass('fixed');
        }
    }
});
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})