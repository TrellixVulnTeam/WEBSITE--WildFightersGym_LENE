//Burger icon changes to X
function myFunction(x) {
	x.classList.toggle("change");
  }


//Burger on click adds the class open to navbar-menu
var menu = document.querySelector(".burger");
menu.addEventListener("click", function() {
  document.querySelector(".navbar-menu").classList.toggle("open")
}, false);

