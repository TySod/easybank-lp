const hamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener('click', function(){
    console.log('hello clicker')
    if(header.classList.contains('open')){
        // close hamburger
        header.classList.remove('open')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    }
    else{
        header.classList.add('open')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
    }
})