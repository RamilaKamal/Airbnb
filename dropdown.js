const middleNavbar = document.getElementById("middle-navbar-container");
const hiddenNavbar = document.getElementById("hidden-navbar");
const Navbar = document.getElementById("desktop-navbar");
const mapDropdown = document.querySelector(".location-dropdown");
const calendar = document.querySelector(".calendar-dropdown");
const ageDropdown = document.querySelector(".ages-dropdown");
const menu = document.getElementById("content-container");
const footer = document.querySelector("footer");
const iconsContainer = document.getElementById("iconic-container");
const switchbtn = document.querySelector(".switch-btn");


function displayNavbar() {
  // Navbar.style.transition = "all 4s ";
  switchbtn.classList.add("active");
  middleNavbar.classList.add("active");
  menu.classList.add("active");
  footer.classList.add("active");
  iconsContainer.style.display = "none";
  document.querySelector(".dropdown-center").classList.toggle("active")
  document.querySelector(".round-nav").classList.toggle("active");
  const timeactive = setTimeout(() => {
    Navbar.classList.add("active");
  }, 150)
  const activeTime = setTimeout(() => {
    middleNavbar.style.display = "none";
    hiddenNavbar.style.width = "66%";
  }, 300)
  const myTimeout = setTimeout(() => {
    hiddenNavbar.style.transition = "all 1s";
    hiddenNavbar.classList.add("active");
  }, 350);

}

function removeNavbar() {
  hiddenNavbar.style.width = "30%"
  mapDropdown.classList.remove("show");
  calendar.classList.remove("show");
  const timeout1 = setTimeout(() => {
    hiddenNavbar.classList.remove("active");
    middleNavbar.style.display = "flex";
  }, 130);
  const removeTime = setTimeout(() => {
    Navbar.classList.remove("active");
    menu.classList.remove("active");
    footer.classList.remove("active");
    switchbtn.classList.remove("active");
    iconsContainer.style.display = "flex";
    middleNavbar.classList.remove("active");
  }, 250);
}

function activedropdown1() {
  mapDropdown.classList.toggle("show");
}

function activedropdown2() {
  calendar.classList.toggle("show");
}
function activedropdown3() {
  ageDropdown.classList.toggle("show");
}

const accordion = document.querySelectorAll(".dropdown-center");
accordion.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    let menu = item.querySelector(".dropdown-menu");
    if (item.classList.contains("active")) {
      menu.classList.add("show");
    } else {
      menu.classList.remove("show");
    }
    removeActive(index);
  });
});

function removeActive(index1) {
  accordion.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("active");
      let lists = item2.querySelector(".dropdown-menu");
      lists.classList.remove("show");
    }
  })
}

