var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var preloader = document.querySelector(".preloader")
var loaderline = document.querySelector(".loader")

window.addEventListener("load", loading);

function loading() {
  preloader.classList.add("disppear");
  loaderline.classList.add("disppear-line");
}

var typed = new Typed(".typing", {
  strings: ["RolePlay", "Community"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});



var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.75 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.75
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });

  myFunction()
};

var removeAllActiveClasses = function () {
  document.querySelectorAll(".sec").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `.sec[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll(".sec");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});



var scroll2 = document.getElementById("scroll-down");
var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky + 600) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset > sticky + 90) {
    scroll2.classList.add("sticky2");
  } else {
    scroll2.classList.remove("sticky2")
  }
}
