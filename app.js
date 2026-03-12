
let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
    var RectLocation = rect.getBoundingClientRect();
    var InsideRectval = details.clientX - RectLocation.left;

    if (InsideRectval < RectLocation.width / 2) {

        var redColor = gsap.utils.mapRange(0, RectLocation.width/2, 255, 0, InsideRectval);

        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: "power4"
        });

    } else {

        var blueColor = gsap.utils.mapRange(RectLocation.width/2, RectLocation.width, 0, 255, InsideRectval);

        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: "power4"
        });

    }
});


rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white",
    })
})