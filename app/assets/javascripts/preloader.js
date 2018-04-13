$(document).on('ready page:load', preloader())

function preloader() {

    if (!sessionStorage.isVisited) {
        // console.log('Show preloader');
        sessionStorage.isVisited = 'true'
        $(".preloader-wrap").delay(1500).fadeOut("slow");
    } else {
        // console.log('Hide preloader');
        $(".preloader-wrap").hide();
    }

}

// $(window).load(function() {
// }