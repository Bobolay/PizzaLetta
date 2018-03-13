// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

        // The global jQuery object is passed as a parameter
        yourcode(window.jQuery, window, document);

    }(function($, window, document) {

        // The $ is now locally scoped

        // Listen for the jQuery ready event on the document
        $(function() {

            // MIX IT UP up initialize (for items: pizza and drinks)
            $('.mix-container').mixItUp({
                callbacks: {
                    onMixLoad: function (state, futureState) {
                        $('.mix-container .mix').addClass('display-none');
                    }
                }
            });

            // Choose only ONE option (like sauce type)

        });

        // The rest of the code goes here!
    })
);