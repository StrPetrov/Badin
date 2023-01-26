function hoverAndClick() {

    let htmlElement = document.getElementsByTagName('html');
    let x = document.querySelector('.menuButton');
    let left = document.querySelector('.mainLeft');
    let top = document.querySelector('.mainTop');
    let bot = document.querySelector('.mainBot');
    let right = document.querySelector('.mainRight');
    let menu = document.querySelector('.afterClickMenu');
    let items = document.querySelectorAll('.afterClickMenuListItem');
    let close = document.querySelector('.closeButton');
    let overlay = document.querySelector('.windowOverlay');
    
    const events = ['fadeIn1 1s forwards', 'fadeIn2 1s forwards', 'fadeIn3 1s forwards',
    'fadeIn4 1s forwards', 'fadeIn5 1s forwards', 'fadeIn6 1s forwards', 'fadeIn7 1s forwards'];
    let i = 0;
    let r = 0;

    x.addEventListener('mouseover', function() {
         left.classList.add('slideInFromLeft');
         top.classList.add('slideInFromTop');
         bot.classList.add('slideInFromBot');

         left.removeAttribute('id');
         top.removeAttribute('id');
         right.removeAttribute('id');
         bot.removeAttribute('id');
    })

    x.addEventListener('mouseout', function() {
         left.classList.remove('slideInFromLeft');
         top.classList.remove('slideInFromTop');
         bot.classList.remove('slideInFromBot');
    })

    x.addEventListener('click', function() {
        left.setAttribute('id', 'menuClickLeft');
        top.setAttribute('id', 'menuClickTop');
        right.setAttribute('id', 'menuClickRight');
        bot.setAttribute('id', 'menuClickBot');
        menu.style.display = 'block';
        htmlElement[0].style.cssText = 'overflow: hidden;'
        
        for(;i < items.length, r < events.length; i++, r++) {
            items[i].style.animation = `${events[r]}`;
        }

        x.style.display = 'none';
        close.style.display = 'block';
        close.style.animation = 'slideRight .3s ease-out forwards';
        overlay.style.display = 'block';
        overlay.style.animation = 'windowOverlayCompress .5s linear forwards';
    })
}

function clickClose() {

    let htmlElement = document.getElementsByTagName('html');
    let x = document.querySelector('.menuButton');
    let left = document.querySelector('.mainLeft');
    let top = document.querySelector('.mainTop');
    let bot = document.querySelector('.mainBot');
    let right = document.querySelector('.mainRight');
    let menu = document.querySelector('.afterClickMenu');
    let close = document.querySelector('.closeButton');
    let overlay = document.querySelector('.windowOverlay');

    close.addEventListener('click', function() {
        left.removeAttribute('id');
        top.removeAttribute('id');
        bot.removeAttribute('id')
        right.removeAttribute('id');

        left.setAttribute('id', 'reverseLeft');
        top.setAttribute('id', 'reverseTop');
        bot.setAttribute('id', 'reverseBot')
        right.setAttribute('id', 'reverseRight');
        
        menu.style.display = 'none';
        x.style.display = 'block';
        close.style.display = 'none';
        close.style.animation = 'slideRight .3s ease-out reverse';
        overlay.style.display = 'none'; 
        htmlElement[0].style.cssText = 'overflow: visible;';
    })
}

function mouseOver() {
    let hover = document.querySelectorAll('.hoverEfect');
    let elements = document.querySelectorAll('.afterClickMenuListItem-passive');
    let i = 0;
    let r = 0;

    const animations = ['slideinFromLeftForMenuList1 .5s linear forwards', 'slideinFromLeftForMenuList2 .5s linear forwards',
    'slideinFromLeftForMenuList3 .5s linear forwards', 'slideinFromLeftForMenuList4 .5s linear forwards',
    'slideinFromLeftForMenuList5 .5s linear forwards', 'slideinFromLeftForMenuList6 .5s linear forwards'];

    elements[0].addEventListener('mouseover', function() {
        hover[0].style.animation = `${animations[0]}`;
    })
    elements[1].addEventListener('mouseover', function() {
        hover[1].style.animation = `${animations[1]}`;
    })
    elements[2].addEventListener('mouseover', function() {
        hover[2].style.animation = `${animations[2]}`;
    })
    elements[3].addEventListener('mouseover', function() {
        hover[3].style.animation = `${animations[3]}`;
    })
    elements[4].addEventListener('mouseover', function() {
        hover[4].style.animation = `${animations[4]}`;
    })
    elements[5].addEventListener('mouseover', function() {
        hover[5].style.animation = `${animations[5]}`;
    })

    elements[0].addEventListener('mouseout', function() {
        hover[0].removeAttribute('style');
    })
    elements[1].addEventListener('mouseout', function() {
        hover[1].removeAttribute('style');
    })
    elements[2].addEventListener('mouseout', function() {
        hover[2].removeAttribute('style');
    })
    elements[3].addEventListener('mouseout', function() {
        hover[3].removeAttribute('style');
    })
    elements[4].addEventListener('mouseout', function() {
        hover[4].removeAttribute('style');
    })
    elements[5].addEventListener('mouseout', function() {
        hover[5].removeAttribute('style');
    })
}

function turnOff() {

    let left = document.querySelector('.mainLeft');
    let top = document.querySelector('.mainTop');
    let bot = document.querySelector('.mainBot');
    let right = document.querySelector('.mainRight');
    let menu = document.querySelector('.afterClickMenu');
    let overlay = document.querySelector('.windowOverlay');
    let close = document.querySelector('.closeButton');

    window.addEventListener('resize', function() {
        if (window.innerWidth < 1450) {
            left.style.visibility = 'hidden';
            top.style.visibility = 'hidden';
            bot.style.visibility = 'hidden';
            right.style.visibility = 'hidden';
            menu.style.visibility = 'hidden';
            overlay.style.visibility = 'hidden';
            close.style.visibility = 'hidden';
        }
        else {
            left.style.visibility = 'visible';
            top.style.visibility = 'visible';
            bot.style.visibility = 'visible';
            right.style.visibility = 'visible';
            menu.style.visibility = 'visible';
            overlay.style.visibility = 'visible';
            close.style.visibility = 'visible';
        }
    })
    
}

hoverAndClick();
clickClose();
mouseOver();
turnOff();