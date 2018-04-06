var button = document.getElementsByClassName('nav_expand')[0];
var navLinks = document.getElementsByClassName('header_links')[0];
var expandedNav = false;
window.addEventListener('scroll', onScroll);
button.onclick = function () {

    expandedNav ? navLinks.style.height = "0" : navLinks.style.height = "170px";
    expandedNav = !expandedNav;
};
function onScroll() {
    var nav = document.getElementsByClassName('header_nav_main')[0];
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    scrolled !== 0 ? nav.classList.add('nav_light') : nav.classList.remove('nav_light');
    }
