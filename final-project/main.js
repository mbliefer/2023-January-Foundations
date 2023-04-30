$(function () {

    // click next arrow to move images, show next image, remove first image
    $(".next").click(function () {
        let prevImages = $(".show-image");
        let removedImage = prevImages[0];
        $(".show-image").next().addClass("show-image");
        $(removedImage).removeClass("show-image");
        let currentImages = $(".show-image");
        let firstImage = currentImages[0];
        if (currentImages.length < 4) {
            $(removedImage).addClass("show-image");
        }
    });

    $(".prev").click(function () {
        let prevImages = $(".show-image");
        let removedImage = prevImages[3];
        $(".show-image").prev().addClass("show-image");
        $(removedImage).removeClass("show-image");
        let currentImages = $(".show-image");
        let firstImage = currentImages[0];
        if (currentImages.length < 4) {
            $(removedImage).addClass("show-image");
        }
    });

    $(".image-slider img").click(function () {
        $imgsource = $(this).attr("src");
        $("#big-image img:first-child").attr("src", $imgsource);
        $("#big-image").css("visibility", "visible");
    });

    $(".closex").click(function () {
        $("#big-image").css("visibility", "hidden");
    });
});
