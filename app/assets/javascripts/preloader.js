// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

        // The global jQuery object is passed as a parameter
        yourcode(window.jQuery, window, document);

    }(function($, window, document) {

        // The $ is now locally scoped

        // Listen for the jQuery ready event on the document
        $(function() {


            // Initialize nice select
            setTimeout(function(){
                $('.preloader-wrap').fadeOut();
            }, 1000);

        });

        // The rest of the code goes here!
    })
)