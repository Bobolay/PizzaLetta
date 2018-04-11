$(document).on('ready page:load', preloader())

function preloader() {

    if (!sessionStorage.isVisited) {
        sessionStorage.isVisited = 'true'
        $(".preloader-wrap").delay(1500).fadeOut("slow");
    } else {
        $(".preloader-wrap").hide();
    }

}