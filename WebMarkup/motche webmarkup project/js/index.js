// Mobile Navigation Menu
function toggleMenu() {
    var x = document.getElementById("nav-toggle");
    if (x.style.height === "auto") {
      x.style.height = "50px";
    } else {
      x.style.height = "auto";
    }
  }