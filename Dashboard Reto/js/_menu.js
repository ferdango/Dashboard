function toggleMenu() {
    var cMenu = document.getElementById("Sidebar-content");
    var so = document.getElementById("overlay-content");
    so.classList.toggle("show_div");
    cMenu.classList.toggle("showing_sidebar");
}