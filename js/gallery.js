(function() {
    let elementLeft;
    let elementRight;
    let windowHeight;

    function init() {
        elementLeft = document.querySelector('.row-left');
        elementRight = document.querySelector('.row-right');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        let positionFromTop = elementLeft.getBoundingClientRect().top;

        if(positionFromTop - windowHeight <= 0 && positionFromTop >= -1350) {
            elementLeft.style.transform = 'translateY(-7%)';
            elementLeft.style.transition = 'transform 1s';
            elementRight.style.transform = 'translateY(-7%)';
            elementRight.style.transition = 'transform 1s';
        }
        else if(positionFromTop - windowHeight > 0) {
            elementLeft.style.transform = 'translateY(0)';
            elementLeft.style.transition = 'transform 1s';
            elementRight.style.transform = 'translateY(0)';
            elementRight.style.transition = 'transform 1s';
        }
        else if(positionFromTop < -1350) {
            elementLeft.style.transform = 'translateY(7%)';
            elementLeft.style.transition = 'transform 1s';
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();