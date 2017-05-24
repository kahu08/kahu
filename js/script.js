$(document).ready(function() {
    $(window).scroll(function() {



        if ($(window).scrollTop() > 600) {
            $('.navbar-index').addClass('navbar-fixed-top');
        }

        if ($(window).scrollTop() < 601) {
            $('.navbar-index').removeClass('navbar-fixed-top');
        }
    });
    // $(".click-img1").click(function() {
    //     $(".project-image1").toggle("slow", function() {});
    // });
    // $(".click-img2").click(function() {
    //     $(".project-image2").toggle("slow", function() {});
    // });
    // $(".click-img3").click(function() {
    //     $(".project-image3").toggle("slow", function() {});
    // });
    // $(".click-img4").click(function() {
    //     $(".project-image4").toggle("slow", function() {});
    // });
});

function blinker() {
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
}

setInterval(blinker, 1000); //Runs every second
