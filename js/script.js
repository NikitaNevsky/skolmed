$('.burger').click(function () {
    $('.menu').toggleClass('d-block');
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
