/* Carousel */

let burgerPosition = 0;
let burgerLine1 = document.querySelector(".burger-button-line1");
let burgerLine2 = document.querySelector(".burger-button-line2");
let burgerButton = document.querySelector(".burger-button");
let carouselOffset = 0;
let sliderFirst = document.getElementById("favorite-middle-content");
let sliderSecond = document.getElementById("favorite-middle-content-2");
let sliderThird = document.getElementById("favorite-middle-content-3");

let ss = document.querySelector(".favorite-middle-content");
function swipeRight() {
  document.querySelector(".slider-content").style.right = 1300 + "px";
  document.querySelector(".slider-content2").style.right = 350 + "px";
}

let backgroundColor = document.querySelector(".background-color");
let flexWrapper = document.querySelector(".flex-wrapper");
let headerItems = document.querySelector(".header-items");
let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".menu-button");
let menuButtonLink = document.querySelector(".menu-button-link");
let burgerMenuImg = document.querySelector(".burger-menu-cup");
let burgerRightDiv = document.createElement("div");
burgerRightDiv.className = "burgerRightDiv";

/*let mediaQuery = window.matchMedia( '( max-width: 768px )' )
  
  if ( mediaQuery.matches ) {
    headerItems.after(burgerRightDiv)
    burgerRightDiv.append(menuButtonLink);
    burgerRightDiv.prepend(menu); 
    menuButtonLink.style.zIndex = "1";
  }*/

/* Листенеры на убирание меню из хедера */

const mediaQuery3 = window.matchMedia("(max-width: 768px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    headerItems.after(burgerRightDiv);
    burgerRightDiv.append(menuButtonLink);
    burgerRightDiv.prepend(menu);
  }
}

mediaQuery3.addListener(handleTabletChange);
handleTabletChange(mediaQuery3);

const mediaQuery2 = window.matchMedia("(min-width: 769px)");

function handleTabletChange2(e) {
  // Check if the media query is true
  if (e.matches) {
    headerItems.append(menu);
    headerItems.append(menuButtonLink);
    hideBurgerMenu();
  }
}

mediaQuery2.addListener(handleTabletChange2);
handleTabletChange2(mediaQuery2);

function moveBurgerMenu() {
  if (burgerPosition == 0) {
    showBurgerMenu();
    return;
  }
  if (burgerPosition == 1) {
    hideBurgerMenu();
    return;
  }
}

function hideBurgerMenu() {
  burgerRightDiv.style.transition = 1 + "s";
  burgerRightDiv.style.right = -200 + "%";
  burgerLine1.style.transform = `rotate(${0}deg)`;
  burgerLine1.style.top = 16 + "px";
  burgerLine1.style.left = 12 + "px";
  burgerLine2.style.transform = `rotate(${0}deg)`;
  burgerLine2.style.top = 24 + "px";
  burgerLine2.style.left = 12 + "px";
  burgerPosition = 0;
  burgerRightDiv.style.transition = 1 + "s";
  setTimeout(burgerGoNone, 260);
  return;
}

function showBurgerMenu() {
  burgerRightDiv.style.display = "flex";

  burgerRightDiv.style.width =
    parseInt(getComputedStyle(flexWrapper).width) - 80 + "px";
  menuButtonLink.style.zIndex = "1";
  burgerRightDiv.style.transition = 0.8 + "s";
  burgerRightDiv.style.right = 0 + "%";
  burgerLine1.style.transition = 0.5 + "s";
  burgerLine1.style.transform = `rotate(${45}deg)`;
  burgerLine1.style.top = 20 + "px";
  burgerLine2.style.transition = 0.5 + "s";
  burgerLine2.style.transform = `rotate(${-45}deg)`;
  burgerLine2.style.top = 20 + "px";
  burgerPosition = 1;
  return;
}

window.addEventListener(
  `resize`,
  (event) => {
    hideBurgerMenu();
  },
  false
);

function burgerGoNone() {
  burgerRightDiv.style.display = "none";
}

/* Carousel block */

let buttonLeft = document.querySelector(".button-left");
let carousel = document.querySelector(".favorite-middle-content");
let sliderMain = document.querySelector(".slider");
let slider1 = document.querySelector(".slider-1");
let slider2 = document.querySelector(".slider-2");
let slider3 = document.querySelector(".slider-2");
let carouselCounter = 1000;
let startX;
let finishX;
let startMobileX;
let finishMobileX;

/* Стартовые и конечные координаты для Desktop и Mobile */

sliderMain.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  console.log(startX);
});

sliderMain.addEventListener("mouseup", function (e) {
  pressed = false;
  finishX = e.clientX;
  console.log(finishX);
  sliderMainDesktop();
});

sliderMain.addEventListener("touchstart", function (e) {
  startMobileX = e.changedTouches[0].pageX;
});

sliderMain.addEventListener("touchend", function (e) {
  finishMobileX = e.changedTouches[0].pageX;
  sliderMainMobile();
});

function sliderMainDesktop() {
  if (startX > finishX) {
    buttonRightf();
    return;
  }
  if (startX < finishX) {
    buttonLeftf();
    return;
  }
}

function sliderMainMobile() {
  if (startMobileX > finishMobileX) {
    buttonRightf();
    return;
  }
  if (startMobileX < finishMobileX) {
    buttonLeftf();
    return;
  }
}

function buttonLeftf() {
  if (carouselCounter == 1000) {
    selectThirdSlide();
    carousel.style.transition = 1 + "s";
    carousel.style.left = -1000 + "px";
    carouselCounter = -1000;
    return;
  }
  if (carouselCounter == 0) {
    selectFirstSlide();
    carousel.style.transition = 1 + "s";
    carousel.style.left = 1000 + "px";
    carouselCounter = 1000;
    return;
  }
  if (carouselCounter == -1000) {
    selectSecondSlide();
    carousel.style.transition = 1 + "s";
    carousel.style.left = 0;
    carouselCounter = 0;
    return;
  }
}

function buttonRightf() {
  if (carouselCounter == -1000) {
    selectFirstSlide();
    carousel.style.transition = 1 + "s";
    carousel.style.left = 1000 + "px";
    carouselCounter = 1000;
    return;
  }
  if (carouselCounter == 0) {
    selectThirdSlide();
    carousel.style.transition = 1 + "s";
    carousel.style.left = -1000 + "px";
    carouselCounter = -1000;
    return;
  }
  if (carouselCounter == 1000) {
    selectSecondSlide();
    carousel.style.transition = 1 + "s";
    carousel.style.left = 0;
    carouselCounter = 0;
    return;
  }
}

function chooseSLider1() {
  selectFirstSlide();
  carousel.style.transition = 1 + "s";
  carousel.style.left = 1000 + "px";
  carouselCounter = 1000;
  return;
}

function chooseSLider2() {
  selectSecondSlide();
  carousel.style.transition = 1 + "s";
  carousel.style.left = 0;
  carouselCounter = 0;
  return;
}

function chooseSLider3() {
  selectThirdSlide();
  carousel.style.transition = 1 + "s";
  carousel.style.left = -1000 + "px";
  carouselCounter = -1000;
}

/* Slider-control */

let sliderControl1 = document.querySelector(".slider-control-1");
let sliderControl2 = document.querySelector(".slider-control-2");
let sliderControl3 = document.querySelector(".slider-control-3");
let statusBar1 = document.querySelector(".status-bar-1");
let statusBar2 = document.querySelector(".status-bar-2");
let statusBar3 = document.querySelector(".status-bar-3");

function selectFirstSlide() {
  clearTimeout(timeoutIDs3tos1);
  clearTimeout(timeoutIDs2tos3);
  statusBar1.classList.remove("statusBar1");
  statusBar2.classList.remove("statusBar1");
  statusBar3.classList.remove("statusBar1");
  statusBar1.classList.add("statusBar1");
  timeoutIDs1tos2 = setTimeout(autoSlide, 7000);
  return;
}

function selectSecondSlide() {
  clearTimeout(timeoutIDs1tos2);
  clearTimeout(timeoutIDs3tos1);
  statusBar1.classList.remove("statusBar1");
  statusBar2.classList.remove("statusBar1");
  statusBar3.classList.remove("statusBar1");
  statusBar2.classList.add("statusBar1");
  timeoutIDs2tos3 = setTimeout(autoSlide, 7000);
  return;
}

function selectThirdSlide() {
  clearTimeout(timeoutIDs1tos2);
  clearTimeout(timeoutIDs2tos3);
  statusBar3.classList.remove("statusBar1");
  statusBar2.classList.remove("statusBar1");
  statusBar1.classList.remove("statusBar1");
  statusBar3.classList.add("statusBar1");
  timeoutIDs3tos1 = setTimeout(autoSlide, 7000);
  return;
}

setTimeout(() => {
  selectFirstSlide();
}, 1000);

/* Каскад переключений */

let autoSlide = function () {
  buttonRightf();
};

let timeoutIDs1tos2;
let timeoutIDs2tos3;
let timeoutIDs3tos1;

/* Логика для страницы Menu */

let showMoreItemsButton = document.querySelector(".more-items-button");
let coffeeItem5 = document.querySelector(".coffee-item-5");
let coffeeItem6 = document.querySelector(".coffee-item-6");
let coffeeItem7 = document.querySelector(".coffee-item-7");
let coffeeItem8 = document.querySelector(".coffee-item-8");

function showMoreItems() {
  document.querySelector(".coffee-item-5").style.display = "flex";
  document.querySelector(".coffee-item-6").style.display = "flex";
  document.querySelector(".coffee-item-7").style.display = "flex";
  document.querySelector(".coffee-item-8").style.display = "flex";
  document.querySelector(".more-items-button").style.display = "none";
}

function showMoreItemsD() {
  document.querySelector(".dessert-item-5").style.display = "flex";
  document.querySelector(".dessert-item-6").style.display = "flex";
  document.querySelector(".dessert-item-7").style.display = "flex";
  document.querySelector(".dessert-item-8").style.display = "flex";
  document.querySelector(".more-items-button-d").style.display = "none";
}

/* Логика для модальных окон */

let coffeItem1 = document.querySelector(".coffee-item-1");
let backdroop = document.createElement("div");
let header = document.querySelector(".header");

/* 
function showCoffeeItem1() {
  let backdroop = document.createElement('div');
  document.querySelector('.flex-wrapper').append(backdroop)
  backdroop.className = 'backdrop';
  document.querySelector('.body').style.overflowY = "hidden";
  document.querySelector('.backdrop').append(document.querySelector('.modal'))
  document.querySelector('.modal').style.display = "flex";
}

function closeModal(){
  document.querySelector('.modal').style.display = "none";
  document.querySelector('.backdrop').remove(document.querySelector('.modal'))
  document.querySelector('.body').style.overflowY = "auto";
}
*/

// try json

fetch("/products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
    const name = `${obj[0].name}`;
    const descr = `${obj[0].description}`;
    console.log(name);
    console.log(descr);
  });
