function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.getElementById('botao-menu').style.backgroundColor = 'transparent';
        document.getElementById('botao-menu').style.border = 'none';
        }
        else{
            menuMobile.classList.add('open');
            document.getElementById('botao-menu').style.border = '1px white solid';
            document.getElementById('botao-menu').style.borderRadius = '5px';
        }
}

// Slide
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// setInterval(next, 7000);