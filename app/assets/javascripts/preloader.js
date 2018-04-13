$(document).on('ready', preloader())

function preloader() {

    if (!sessionStorage.isVisited) {
        // console.log('Show preloader');
        sessionStorage.isVisited = 'true'
        $(".preloader-wrap").delay(1000).fadeOut("slow");
    } else {
        // console.log('Hide preloader');
        $(".preloader-wrap").hide();
    }

}

// $(window).load(function() {
// }