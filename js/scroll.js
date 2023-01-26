let scrollPercentage = () => {
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progressValue');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.
    scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);

    progressValue.style.background = `conic-gradient(rgb(255, 255, 255) ${scrollValue}%,
    rgb(107, 114, 142) ${scrollValue}%)`;

    if(scrollValue <= 1) {
        scrollProgress.style.transform = 'scale(0)';
    }
    else {
        scrollProgress.style.transform = 'scale(1)';
    }

    scrollProgress.addEventListener('click', function() {
        window.scrollTo(0, 0)
    })
}

window.addEventListener('scroll', scrollPercentage);

