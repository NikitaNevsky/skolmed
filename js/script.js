$('.burger').click(function () {
    $('.menu').toggleClass('d-block');
});

$("a.scroll-to").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
});

$('.doctors__slider').owlCarousel({
    items:1,
    loop:false,
    nav:true,
    dots:false
});

$('.services__slider').owlCarousel({
    items:4,
    loop:false,
    nav:true,
    dots:false
});

$('.reviews__slider').owlCarousel({
    items:4,
    loop:false,
    nav:true,
    dots:false
});
