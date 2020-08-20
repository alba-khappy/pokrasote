window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        document.getElementsByClassName('to-top')[0].classList.remove('d-n');
    } else {
        document.getElementsByClassName('to-top')[0].classList.add('d-n');
    }
});