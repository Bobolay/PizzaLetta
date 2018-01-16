// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

    // The global jQuery object is passed as a parameter
    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document
    $(function() {

        // initialize nice select
        $('select').niceSelect();

        // show/hide cart
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
        // close cart
        $.clickOut('.cart-container',
            function(){
                $('.cart-container').removeClass('visible');
                $('body').removeClass('overflow-hidden');
            },{except: '.cart-container, .cart-icon'}
        )


        // show contact box
        $('.contact-dropdown-btn').on('click', function(){
            if ($('.contact-dropdown').hasClass('visible')){
                $('.contact-dropdown').removeClass('visible');
                $(this).removeClass('active');
            } else {
                $('.contact-dropdown').addClass('visible');
                $(this).addClass('active');
            }
        })
        // close cart
        $.clickOut('.contact-dropdown',
            function(){
                $('.contact-dropdown').removeClass('visible');
                $('.contact-dropdown-btn').removeClass('active');
            },{except: '.contact-dropdown, .contact-dropdown-btn'}
        )



    });

    // The rest of the code goes here!

})
);