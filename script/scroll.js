const navbar = document.getElementById("navbar");
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  navbar.classList.add("blurred");
  prevScrollPos = currentScrollPos;
}
