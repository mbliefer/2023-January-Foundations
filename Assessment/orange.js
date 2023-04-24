$(function () {
   
    $("nav > a").click(function() {
        $("article").removeClass("show");
        let target = $(this).attr("href");
        $(target).addClass("show");     
    });
    
    $("article > img").click(function() {
        $("article").removeClass("show");
    });
});