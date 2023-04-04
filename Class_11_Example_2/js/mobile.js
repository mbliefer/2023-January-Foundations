$(function () {
    $("body").on("click", "#mobile-menu", function () {
        $("nav").toggleClass("nav-show");
    });
    $("nav > a").click(function () {
        $("nav").removeClass("nav-show");
    })
});