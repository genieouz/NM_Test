var prev = document.getElementById('prev');
var next = document.getElementById('next');
var autoLoad = document.getElementById('auto_load');
var imgs = document.getElementsByClassName('carousel_img');
var nbImages = imgs.length;
var autoLoadImages = null;
var iImg = 0;

showImage();

prev.addEventListener('click', () => {
    if(iImg > 0) {
        hideImage();
        iImg--;
        showImage();
    }
});

next.addEventListener('click', () => {
    if (iImg < nbImages - 1) {
        hideImage();
        iImg++;
        showImage();
    }
});

autoLoad.addEventListener('click', () => {
    if (autoLoadImages) {
        clearInterval(autoLoadImages);
        autoLoadImages = null;
    } else {
        autoLoadImages = setInterval(toggleImage, 2000);
    }
});

function showImage() {
    imgs[iImg].classList.add('block');
}

function hideImage() {
    imgs[iImg].classList.remove('block');
}

var toggleImage = function () {
    hideImage();
    iImg = (iImg < nbImages - 1) ? iImg + 1 : 0;
    showImage();
}

