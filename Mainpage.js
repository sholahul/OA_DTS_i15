// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("heading").style.background = "rgb(4,54,149)";
        document.getElementById("heading").style.paddingTop = "5px";

    } else {
        document.getElementById("heading").style.background = 'transparent';
        document.getElementById("heading").style.paddingTop = "20px";

    }
}

