$(document).ready(function(){
    var navi = document.getElementById("nav");
    navi.addEventListener("click",function(){
        $("header nav").slideToggle();
    })
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll > 100) {
            $("header").addClass("headTop");
        } else if ( scroll <= 100) {
            $("header").removeClass("headTop")
        }
    })
    $("header .navbar-nav .nav-item").click(function(){
        $("html , body").animate({
            scrollTop : $("#" + $(this).data('value') ).offset().top
        },1000)
    })
});