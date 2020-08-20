//toggle burger-menu
document.getElementsByClassName('burger')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('burger-menu')[0];
    menu.classList.toggle('close-burger-menu');
});

//reviews
document.getElementsByClassName('btn-triangle')[0].addEventListener('click', function () {
    var btn = document.getElementsByClassName('btn-triangle')[0];
    btn.classList.toggle('rotate-btn');

    var whiteRectangle = document.getElementsByClassName('white-rectangle')[0];
    whiteRectangle.classList.toggle('white-rectangle-open');

    var hideP = document.getElementsByClassName('hidden')[0];
    hideP.classList.toggle('photo-phone');
});
