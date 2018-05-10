
// TODO: begin with selecting all the DOM elements to work with


let targetElements = [
  document.querySelector("#light-blue"),
  document.querySelector("#dark-grey"),
  document.querySelector("#light-grey"),
  document.querySelector(".logo")
];

let subHeading = document.querySelector(".work-title h2");
let text = [document.querySelectorAll(".hex-value")];
let hamburgerIcon = document.querySelector(".hamburger-icon");
let dropDownContent = document.querySelector(".dropdown-content");

// TODO: define event handlers here

targetElements[0].addEventListener("click", function () {
  darkText();
});

targetElements[1].addEventListener("click", function () {
  lightText();
});

targetElements[2].addEventListener("click", function () {
  darkText("#7d97ad");
});

targetElements[3].addEventListener("click", function () {
  lightText("#fff");
});

hamburgerIcon.addEventListener("click", function () {
  dropDownContent.classList.toggle(".dropdown:hover .dropdown-content");
});


// TODO: define event handler functions here

function darkText(color="") {
  for (elt of text[0]) {
    elt.classList.add("black-color");;
  }
  subHeading.style.color = "#000";
  (color) ? document.body.style.backgroundColor = color :
            document.body.style.backgroundColor = "#02b3e4";
}

function lightText(color="") {
  for (elt of text[0]) {
    elt.classList.remove("black-color");;
  }
  subHeading.style.color = "#808080";
  (color) ? document.body.style.backgroundColor = color :
            document.body.style.backgroundColor = "#2d3c49";
}
