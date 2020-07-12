
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
    // add attributes
    li_item.setAttribute("id", li_id);
    li_item.setAttribute("class", "nav-item");
    // add list content
    li_item.innerHTML += section_text;

    // add to navbar
    nav_ul.appendChild(li_item);
    //
    let btn_target = document.getElementById("section"+ i );
    let nav_btn = document.getElementById(li_id);
    let btn_id = "button" + i;
    let btn_add = document.getElementById(btn_id);

    // add button
    // li_id.addEventListener("click", function() {
    //   btn_target.scrollIntoView ({
    //     behavior: 'smooth'}
    //   )
    //   btn_add.innerHTML +=
    //     "<button class='section-button' onclick='go_top()'>Return to Top</button>";
    // });
  }
}
create_nav();

const scroll_top = () => { //scroll_top
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 0) {
    window.requestAnimationFrame(scroll_top);
    window.scrollTo(0, scroll - scroll / 50);
  }
};

function go_top() { //go_top
scroll_top();

  for (i = 1; i < section_count + 1; i++) {
    let btn_delete = document.getElementById("button" + i);
    btn_delete.innerHTML = "";
  }
}

function check_view() { //check_view
  let in_view = function(elem) { //in_view
    let bound = elem.getBoundingClientRect(); //bound
    return (
      bound.top <= 50 &&
      bound.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < section_count + 1; i++) {
    let section_view = document.getElementById("section" + i); //section_full

    window.addEventListener(
      "scroll",
      function(event) {
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
