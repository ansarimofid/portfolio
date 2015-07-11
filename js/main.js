$(document).ready(function()
                 {
    $('.navbar-brand-custom').hover(
        function() {
            $('.navbar-brand-custom strong').toggleClass("navbar-brand-strong-hover");
            $('.navbar-brand-custom span').toggleClass("navbar-brand-span-hover");
        })
    
    $('.navbar a,footer a').smoothScroll({
        speed:'auto',
        autoCoefficient:1,
        easing:'swing' 
    });

});


