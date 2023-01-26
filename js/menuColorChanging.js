const lines = document.querySelectorAll('.menuButtonLine');
const menu = document.querySelector('.rotate');

let changeColor = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.
    scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);

    if(scrollValue < 6) {
        for(let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'white';
        }
        menu.style.color = 'white';
    }
    else if(scrollValue >= 6 && scrollValue <= 87) {
        for(let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'black';
        }
        menu.style.color = 'black';
    }
    else if(scrollValue > 87 && scrollValue <= 93) {
        for(let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'white';
        }
        menu.style.color = 'white';
    }
    else if(scrollValue > 93  && scrollValue <= 99) {
        for(let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'black';
        }
        menu.style.color = 'black';
    }
    else {
        for(let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'white';
        }
        menu.style.color = 'white';
    }
}

window.addEventListener('scroll', changeColor);



