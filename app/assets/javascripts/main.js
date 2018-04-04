// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

    // The global jQuery object is passed as a parameter
    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document
    $(function() {


        // Alert message for client
        // if (Cookies.get('alert_msg') != 'off') {
        //     $('.client-alert-popup').addClass('visible');
        // }
        // Close client alert message
        $('.alert-popup-close-btn').on('click', function(){
            $('.client-alert-popup').addClass('hidden');
            // Cookies.set('alert_msg', 'off');
        })


        // Initialize nice select
        $('select').niceSelect();


        // Show/hide cart
        $('.menu-btn').on('click', function(){
            if ($('.menu-wrap').hasClass('visible')){
                $(this).removeClass('is-active');
                $('.menu-wrap').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            } else {
                $(this).addClass('is-active');
                $('.menu-wrap').addClass('visible');
                $('body').addClass('overflow-hidden');
            }
        })


        // Show/hide menu on mobile
        $('.cart-icon').on('click', function(){
            if ($('.cart-container').hasClass('visible')){
                $('.cart-container').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            } else {
                $('.cart-container').addClass('visible');
                $('body').addClass('overflow-hidden');
            }
        })


        // Close side-container (cart and custom pizza)
        $('.cart-close-btn').on('click', function(){
            $('.side-container').removeClass('visible');
            $('.floated').removeClass('active');
            $('body').removeClass('overflow-hidden');
        })


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
        $('.success-popup-close-btn').on('click', function(){
            $('.success-wrap').removeClass('visible');
            $('body').removeClass('overflow-hidden');
        })
        $.clickOut('.success-wrap.visible',
            function(){
                $('.success-wrap').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            },{except: '.success-wrap'}
        )


        // OWL CAROUSEL initialize (about us page)
        var owl = $('.owl-carousel').owlCarousel({
            loop: false,
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

        // Temporary (alert label)
        $('.alert-label span').on('click', function(){
            $('.alert-label').fadeOut();
        })

        // Remove active class from ingredients
        $('.clear-btn').on('click', function(){
            $('.floated').removeClass('active');
        })


        // Video cover
        $('.video-wrap').on('click', function(){
            var iframe = $(this).find('iframe');
            var url = iframe.attr('src');

            var cover_photo = $(this).find('.video-cover');
            var video = $(this).find('.video');

            iframe.attr('src',url+'?autoplay=1');
            cover_photo.fadeOut();
            video.addClass('playing');
        })

    });

    // The rest of the code goes here!
})
);