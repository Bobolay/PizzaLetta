$(document).on('ready', preloader())

function preloader() {

    if (!sessionStorage.isVisited) {
        sessionStorage.isVisited = 'true'
        $(".preloader-wrap").delay(1000).fadeOut("slow");
    } else {
        $(".preloader-wrap").hide();
    }

}