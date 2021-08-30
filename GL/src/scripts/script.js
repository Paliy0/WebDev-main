let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
  console.log(prevScrollPos);
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollPos) {
    document.getElementsByTagName("nav")[0].classList.add("nav-hide");
  } else {
    document.getElementsByTagName("nav")[0].classList.remove("nav-hide");
  }
  prevScrollPos = currentScrollPos;
});
