
let nav_ul = document.getElementById("navbar__list");
// number of sections in the webpage
let section_count = document.getElementsByClassName("landing__container").length;

// loop through sections get section name and add to navbar
function create_nav() {
  for (i = 1; i < section_count + 1; i++) {
    let section_name = "#title" + i;
    let select_section = document.querySelector(section_name);
    let section_text = select_section.textContent;
    let li_item = document.createElement("li");
    let li_text = document.createTextNode(section_text);
    let li_id = "list" + i;
    // let li_link = `<a href="#${select_text}">${select_text}</a>`
    // add attributes

    li_item.setAttribute("id", li_id);
    li_item.setAttribute("class", "nav-item");
    li_item.setAttribute("data-id", "section"+i);
    // add list content
    // li_item.innerHTML += `<a href="#${section_text}">${section_text}</a>`;
    li_item.innerHTML += `${section_text}`;

    // add to navbar
    nav_ul.appendChild(li_item);

  }
}
create_nav();

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




function check_view() { //check_view
  let in_view = function(elem) { //in_view
    let bound = elem.getBoundingClientRect(); //bound
    return (
      bound.top >= 0 &&
      bound.left >= 0 &&
      bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < section_count + 1; i++) {
    let section_view = document.getElementById("section" + i); //section_full

    window.addEventListener("scroll", function(event) {
        if (in_view(section_view)) {
          section_view.classList.add("your-active-class");
        } else {
          section_view.classList.remove("your-active-class");
        }
      },
      false
    );
  }
}
check_view();


// function to navigate to targeted section


var get_target = function() {
  document.onclick = function(e) {
    if (e.target.tagName == 'LI') {
      var id = e.target.getAttribute("data-id");
    }
    let anchor = document.getElementById(id);
    anchor.scrollIntoView ({
        behavior: 'smooth'} )
  }
}

get_target()
