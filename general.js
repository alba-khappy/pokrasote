// open popup
document.querySelectorAll('.show-call-me').forEach(function (x) {
    x.addEventListener('click', function () {
        var popup = document.getElementsByClassName('pop-up')[0];
        popup.classList.add('show-popup');
    })
});

// close popup
document.getElementsByClassName('close-popup')[0].addEventListener('click', function () {
    var popup = document.getElementsByClassName('pop-up')[0];
    popup.classList.remove('show-popup');
});


//pop up sign up
document.getElementById('confirm-call-me').addEventListener('click', function () {
    // call rest to send email
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', false);
    xhr.send(JSON.stringify({
        phone: document.getElementsByName('phonenumber')[0].value,
        name: document.getElementsByName('firstname')[0].value,
        message: document.getElementsByName('message')[0].value
    }));
    if (true || xhr.status == 200) {
        var part1 = document.getElementsByClassName('pop-up-part1')[0];
        part1.classList.add('pop-up-none');

        var part2 = document.getElementsByClassName('pop-up-part2')[0];
        part2.classList.remove('pop-up-none');
    }
});

//bg
document.getElementsByClassName('button-pop-up')[0].addEventListener('click', function () {
    var form = document.getElementsByClassName('form')[0];
    form.classList.toggle('bg-none');
});