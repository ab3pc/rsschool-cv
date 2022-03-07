/*==============sticky aside========================*/
const aside = document.getElementById("sidebar");
const header = document.getElementById("header");
const headerBg = document.querySelector(".header-bg");

const sticky = header.offsetHeight + headerBg.offsetHeight - 50;

function myFunction() {
  if (window.pageYOffset > sticky) {
    aside.classList.add("sticky");
  } else {
    aside.classList.remove("sticky");
  }
}
window.onscroll = function () {
  myFunction();
};

/*==============sticky aside========================*/

/*==============scroll To section========================*/
const about = document.querySelector(".content__about");
const education = document.querySelector(".content__education");
const works = document.querySelector(".content__works");

const btnWorks = document.querySelector("#works");
const btnEducation = document.querySelector("#education");
const btnAbout = document.querySelector("#about");

function handleButtonClick(e) {
  if (e.target.closest("#about")) {
    about.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  if (e.target.closest("#education")) {
    education.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  if (e.target.closest("#works")) {
    works.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
aside.addEventListener("click", handleButtonClick);
const btns = document.querySelectorAll(".sidebar__item");

function changeLinkState() {

  if (window.scrollY  <= about.offsetTop +about.offsetHeight -150) {
	btns.forEach((item) => item.classList.remove("active"));
    btnAbout.classList.add("active");
  }
  else if (window.scrollY  > about.offsetTop +about.offsetHeight -150 && window.scrollY < education.offsetTop + education.offsetHeight) {
	btns.forEach((item) => item.classList.remove("active"));
    btnEducation.classList.add("active");
  }
  else if (window.scrollY > education.offsetTop + education.offsetHeight) {
	btns.forEach((item) => item.classList.remove("active"));
    btnWorks.classList.add("active");
  }

else {
    btns.forEach((item) => item.classList.remove("active"));
  }
}

window.addEventListener("scroll", changeLinkState);

// const sections = document.querySelectorAll("section[id]");
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//     let scrollY = window.pageYOffset;
   
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");
        
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".sidebar a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".sidebar a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }


