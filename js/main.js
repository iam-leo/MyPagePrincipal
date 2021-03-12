const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');

for (var i=1; i<400; i++){
    banner.innerHTML += '<div class="blocks"></div>';
    const duracion = Math.random()*3;
    blocks[i].style.animationDuration = 2 * duracion + 's';
    blocks[i].style.animationDelay = duracion + 's';
}

const header = document.getElementsByClassName('header')[0];
const enlacesNav = document.getElementsByClassName('enlacesNav');

setTimeout(function(){
    header.classList.add('activo');
}, 3500);

setTimeout(function(){
    for(var i=0; i<3; i++){
        enlacesNav[i].style.zIndex = '1000';
    }
    const body = document.getElementsByTagName('body')[0];
    body.style.overflowY = 'scroll';
}, 8500);

const typed = new Typed('.typed', {
    strings: ['Diseño y Desarrollo Web.'],
    startDelay: 4000,
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
});