var elHamburgerBtn = document.querySelector('.menu-btn');
var elHeader = document.querySelector('.header');

elHamburgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("header--open");
})