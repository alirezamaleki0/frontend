/* Owl Carousel */
$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: false,
        nav: true,
        rtl:true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            360:{
                items:2
            },
            540: {
                items: 3
            },
            768:{
              items:4
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
});
/* Light Slider*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:false,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

/* Search Form*/
$('.collapse').collapse();

/* Bootstrap Carousel Slider*/
$('.carousel').carousel();

/* Tooltip */
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* Products */
var slider = document.getElementById("range");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
};
