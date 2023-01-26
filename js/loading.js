function loading() {

    let logo = document.querySelector('.logo');
    let title = document.querySelector('.title');
    let text = document.querySelector('.text');
    let buttonLeft = document.querySelector('.btn-left');
    let buttonRight = document.querySelector('.btn-right');
    let towerLeft = document.querySelector('.tower-left');
    let towerRight = document.querySelector('.tower-right');
    let hero = document.querySelector('.hero');
    let planet = document.querySelector('.planet');

    window.addEventListener('load', function() {
        logo.style.animation = 'loading1 1s linear forwards';
        title.style.animation = 'loading2 1s linear forwards';
        text.style.animation = 'loading3 1s linear forwards';
        buttonLeft.style.animation = 'loading4 1s linear forwards';
        buttonRight.style.animation = 'loading5 1s linear forwards';
        towerLeft.style.animation = 'loading6 1s linear forwards';
        towerRight.style.animation = 'loading7 1s linear forwards';
        hero.style.animation = 'loading8 1s linear forwards';
        planet.style.animation = 'loading9 1s linear forwards';
    })
}

loading();