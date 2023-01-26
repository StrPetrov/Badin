let t = 0;

setInterval(function () {

    t += 1;

    if(t === 3) {
        t = 0;
    }

    const array = document.querySelectorAll('img.clientsVertical');

    switch(t) {

        case 0: {
            array[0].src = 'clientsPhotos/blackrock.png';
            array[1].src = 'clientsPhotos/cedarbridge.png';
            array[2].src = 'clientsPhotos/eton-institute.png';
            array[3].src = 'clientsPhotos/polovni-automobili.png';
            array[4].src = 'clientsPhotos/rfpio.png';
            break;
        }

        case 1: {
            array[0].src = 'clientsPhotos/eurobank.png';
            array[1].src = 'clientsPhotos/telekom.png';
            array[2].src = 'clientsPhotos/united-cloud.png';
            array[3].src = 'clientsPhotos/subway.png';
            array[4].src = 'clientsPhotos/wireless-media.png';
            break;
        }

        case 2: {
            array[0].src = 'clientsPhotos/raiffeisen.png';
            array[1].src = 'clientsPhotos/united-cloud.png';
            array[2].src = 'clientsPhotos/rfpio.png';
            array[3].src = 'clientsPhotos/fis.png';
            array[4].src = 'clientsPhotos/telekom.png';
        }
    }
    
}, 5000); 

function anm() {
    const arrayForAnim = document.querySelectorAll('img.clientsVertical');
    const animations = ['slideUp1 5s infinite', 'slideUp2 5s infinite', 'slideUp3 5s infinite',
    'slideUp4 5s infinite', 'slideUp5 5s infinite'];

    let r = 0;
    let q = 0;

    for(;r < arrayForAnim.length, q < animations.length; r++, q++) {
        arrayForAnim[r].style.animation = `${animations[q]}`;
    }
}

anm();




