
let nav_ul = document.getElementById("navbar__list");

//add menu item names here
const menu_items = ["About", "Achievements", "Product", "Service", "Contact Us"];


// navbar scroll view
var prevScrollpos = window.pageYOffset;
function nav_scroll() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
//button code
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 350px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {
  nav_scroll();
  scrollFunction();
}



function check_viewport() { // LAST EDITING 
  let in_view = function(elem) {
   let bound = elem.getBoundingClientRect();
   return (
        bound.top >= 0 &&
        bound.left >= 0 &&
        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bound.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 };
//all available sections to be active
  let j = 0;
  for (let item of menu_items){
    j = j + 1;
    let section_active = document.getElementsByClassName("temp");
    window.addEventListener("scroll", function(event){
      if(in_view(item)){
        section_active[j].classList.add("your-active-class")
      }
    }, false);
  }
}
check_viewport();


// function to navigate to targeted section


var get_target = function() {
  document.onclick = function(e) {
    if (e.target.tagName == 'LI') {
      var target_id = e.target.getAttribute("data-id");
      // alert(target_id);
      let anchor = document.getElementById(target_id);
      anchor.scrollIntoView ({
          behavior: 'smooth'} )
    }
  }
}
get_target()

// loop through array and create navbar
let i = 0;
for (let item of menu_items){
    // create unordered list and add to navbar 'ul'
    i = i + 1;
    let li_item = document.createElement("li");
    li_item.id = "list" + i;
    li_item.className = "nav-item";
    li_item.innerHTML += item;
    li_item.setAttribute("data-id", item);
    nav_ul.appendChild(li_item);
}
