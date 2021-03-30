window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}
function backToTop() {
    window.window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
        });
}