// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

    // The global jQuery object is passed as a parameter
    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document
    $(function() {


        // Initialize nice select
        $('select').niceSelect();


        // Show/hide cart
        $('.cart-icon').on('click', function(){
            if ($('.cart-container').hasClass('visible')){
                $('.cart-container').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            } else {
                $('.cart-container').addClass('visible');
                $('body').addClass('overflow-hidden');
            }
        })
        $('.cart-close-btn').on('click', function(){
            $('.cart-container').removeClass('visible');
            $('body').removeClass('overflow-hidden');
        })
        // Close cart
        $.clickOut('.cart-container.visible',
            function(){
                $('.cart-container').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            },{except: '.cart-container, .cart-icon'}
        )


        // Show contact box
        $('.contact-dropdown-btn').on('click', function(){
            if ($('.contact-dropdown').hasClass('visible')){
                $('.contact-dropdown').removeClass('visible');
                $(this).removeClass('active');
            } else {
                $('.contact-dropdown').addClass('visible');
                $(this).addClass('active');
            }
        })
        // Close contact box
        $.clickOut('.contact-dropdown.visible',
            function(){
                $('.contact-dropdown').removeClass('visible');
                $('.contact-dropdown-btn').removeClass('active');
            },{except: '.contact-dropdown, .contact-dropdown-btn'}
        )


        // Show/hide textarea
        $('.textarea-btn').on('click', function(){
            $('.optional-textarea').toggleClass('visible');
        })


        // Close success message
        $('.success-close-btn').on('click', function(){
            $('.success-wrap').removeClass('visible');
            $('body').removeClass('overflow-hidden');
        })
        $.clickOut('.success-wrap.visible',
            function(){
                $('.success-wrap').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            },{except: '.success-wrap'}
        )

        // Owl carousel initialize (about us page)
        var owl = $('.owl-carousel').owlCarousel({
            loop: true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
        $(".owl-btn-next").click(function(){
            owl.trigger('next.owl.carousel');
        })
        $(".owl-btn-prev").click(function(){
            owl.trigger('prev.owl.carousel');
        })


        // Choose only ONE option (like sauce type)


    });

    // The rest of the code goes here!
})
);