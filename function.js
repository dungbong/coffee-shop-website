// When the user scrolls the page, execute myFunction 
window.onscroll = function() {sticky_bar()};


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_bar() {
  // Get the navbar
var navbar = document.getElementById("sticky_menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function searchFunc() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("label")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}