function displayOverlay() {

    let htmlElement = document.getElementsByTagName('html');
    let menuIcon = document.querySelector('.menuIconMedia');
    let overlay = document.querySelector('.mainOverlay');
    let close = document.querySelector('.closeButton2');
    let logo = document.querySelector('.logo');
    let menu = document.querySelector('.afterClickMenu2');
    let items = document.querySelectorAll('.afterClickMenuListItem2');
    let hover = document.querySelectorAll('.hoverEfect2');
    let list = document.querySelectorAll('.afterClickMenuListItem-passive2');
    let bottomPart1 = document.querySelector('.afterClickMenu2Bottom');
    let bottomPart2 = document.querySelector('.afterClickMenu2BottomText')

    const events = ['fadeIn1 1s forwards', 'fadeIn2 1s forwards', 'fadeIn3 1s forwards',
    'fadeIn4 1s forwards', 'fadeIn5 1s forwards', 'fadeIn6 1s forwards', 'fadeIn7 1s forwards'];

    const animations = ['slideinFromLeftForMenuList1 .5s linear forwards', 'slideinFromLeftForMenuList2 .5s linear forwards',
    'slideinFromLeftForMenuList3 .5s linear forwards', 'slideinFromLeftForMenuList4 .5s linear forwards',
    'slideinFromLeftForMenuList5 .5s linear forwards', 'slideinFromLeftForMenuList6 .5s linear forwards'];

    let i = 0;
    let r = 0;

    menuIcon.addEventListener('click', function() {
        overlay.style.animation = 'popUp .5s linear forwards';
        overlay.style.display = 'block';
        close.style.animation = 'popUpClose .5s linear forwards';
        logo.style.zIndex = '51';
        menu.style.display = 'block';
        htmlElement[0].style.cssText = 'overflow: hidden;';
        bottomPart1.style.animation = 'bottomPartPopUp .1s .5s linear forwards';
        bottomPart2.style.animation = 'bottomPartPopUp .1s .5s linear forwards';

        for(; i < items.length, r < events.length; i++, r++) {
            items[i].style.animation = `${events[r]}`;
        }
    })

    list[0].addEventListener('mouseover',function() {
        hover[0].style.animation = `${animations[0]}`;
    })
    list[1].addEventListener('mouseover',function() {
        hover[1].style.animation = `${animations[1]}`;
    })
    list[2].addEventListener('mouseover',function() {
        hover[2].style.animation = `${animations[2]}`;
    })
    list[3].addEventListener('mouseover',function() {
        hover[3].style.animation = `${animations[3]}`;
    })
    list[4].addEventListener('mouseover',function() {
        hover[4].style.animation = `${animations[4]}`;
    })
    list[5].addEventListener('mouseover',function() {
        hover[5].style.animation = `${animations[5]}`;
    })

    list[0].addEventListener('mouseout', function() {
        hover[0].removeAttribute('style');
    })
    list[1].addEventListener('mouseout', function() {
        hover[1].removeAttribute('style');
    })
    list[2].addEventListener('mouseout', function() {
        hover[2].removeAttribute('style');
    })
    list[3].addEventListener('mouseout', function() {
        hover[3].removeAttribute('style');
    })
    list[4].addEventListener('mouseout', function() {
        hover[4].removeAttribute('style');
    })
    list[5].addEventListener('mouseout', function() {
        hover[5].removeAttribute('style');
    })
}

function hideOverlay() {
    let overlay = document.querySelector('.mainOverlay');
    let close = document.querySelector('.closeButton2');
    let logo = document.querySelector('.logo');
    let menu = document.querySelector('.afterClickMenu2');
    let htmlElement = document.getElementsByTagName('html');

    close.addEventListener('click', function() {
        overlay.style.animation = 'popUpReverse .5s linear forwards';
        overlay.style.display= 'none'; // HOVER SERVICES NE RADI BEZ OVOGA
        close.style.animation = 'popUpCloseReverse 0s linear forwards';
        logo.style.zIndex = '3';
        menu.style.display = 'none';
        htmlElement[0].style.cssText = 'overflow: visible;'
    })
}

displayOverlay();
hideOverlay();