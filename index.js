const navbarContainer = document.querySelector('#menubar');
const scrollLeftBtn = document.getElementById('prev-menubtn');
const scrollRightBtn = document.getElementById('next-menubtn');
let x = window.matchMedia("(min-width: 745px)");
navbarContainer.addEventListener("scroll", function () {
    const scrollLeft = navbarContainer.scrollLeft;
    if (x.matches) {
        scrollLeftBtn.style.display = scrollLeft > 0 ? 'block' : 'none';
    }
    else {
        scrollLeftBtn.style.display = "none";
    }
});

scrollLeftBtn.addEventListener('click', function () {
    navbarContainer.scrollBy({
        left: -400,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', function () {
    navbarContainer.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});

// var carousels = document.querySelectorAll('.carousel');
// for (var i = 0; i < carousels.length; i++) {
//   carousels[i].addEventListener('slid.bs.carousel', function (event) {
//     var carousel = event.target;
//     var prevButton = carousel.querySelector('#prev-btn');
//     var nextButton = carousel.querySelector('#next-btn');
//     // Show all carousel controls
//     var controls = carousel.getElementsByClassName('carousel-control');
//     for (var j = 0; j < controls.length; j++) {
//       controls[j].style.display = 'none';
//     }
//     var carouselItems = carousel.querySelectorAll('.carousel-inner .carousel-item');
//     var firstItem = carouselItems[0];
//     var lastItem = carouselItems[carouselItems.length - 1];
//     if (firstItem.classList.contains('active')) {
//         nextButton.style.display = "block";
//         prevButton.style.display = "none"
//     } else if (lastItem.classList.contains('active')) {
//         nextButton.style.display = "none";
//         prevButton.style.display = "block";
//     }
//     else{
//         nextButton.style.display = "block";
//         prevButton.style.display = "block" ;
//     }
//   })
// }
const carousel = document.querySelectorAll(".carousel-container");
carousel.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        item.classList.toggle("active");
        let nextButton = item.querySelector("#next-btn");
        let prevButton = item.querySelector("#prev-btn");
        var carouselItems = item.querySelectorAll('.carousel-inner .carousel-item');
        let firstItem = carouselItems[0];
        let lastItem = carouselItems[carouselItems.length - 1];
        if (item.classList.contains("active")) {
            if (firstItem.classList.contains('active')) {
                nextButton.style.display = "block";
                prevButton.style.display = "none";
            } else if (lastItem.classList.contains('active')) {
                nextButton.style.display = "none";
                prevButton.style.display = "block";
            }
            else {
                nextButton.style.display = "block";
                prevButton.style.display = "block";
            }
        } else {
            nextButton.style.display = "none";
            prevButton.style.display = "none";
        }
    });
});
carousel.forEach((item, index) => {
    item.addEventListener("mouseout", ()=> {
        item.classList.remove("active");
        let next = item.querySelector("#next-btn");
        let prev = item.querySelector("#prev-btn");
        next.style.display = "none";
        prev.style.display = "none";
    });
});


// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('filterModal')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })
