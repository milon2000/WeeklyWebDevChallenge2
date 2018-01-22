function toggleMenu() {
  var menuBox = document.getElementsByClassName("flex1");
  for (var i = 0; i < menuBox.length; i++) {
    if (menuBox[i].style.display == "block") { // if is menuBox displayed, hide it
      menuBox[i].style.display = "none";
    } else { // if is menuBox hidden, display it
      menuBox[i].style.display = "block";
    }
  }
}


window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("top-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
