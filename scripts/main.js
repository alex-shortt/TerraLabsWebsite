function getWindowScroll(num) {
    var s = $(window).scrollTop(),
        d = $(".section:nth-child(" + num + ")").offset().top;
    c = $(window).height();

    return Math.abs((d - s) / (d + c));
}

var maxBlur = 8;
var blurOffset = 0;

$(window).scroll(function(event) {
    if (getWindowScroll(1) < 0.7) {
        $('.section:nth-child(1) .background-image').css('webkitFilter', "blur(" + (blurOffset + (Math.round(maxBlur * getWindowScroll(1) * 10) / 10)) + "px)");
    }
    if (getWindowScroll(2) < 0.7) {
        $('.section:nth-child(2) .background-image').css('webkitFilter', "blur(" + (blurOffset + (Math.round(maxBlur * getWindowScroll(2) * 10) / 10)) + "px)");
    }
    if (getWindowScroll(4) < 0.7) {
        $('.section:nth-child(4) .background-image').css('webkitFilter', "blur(" + (2 + blurOffset + (Math.round(maxBlur * getWindowScroll(4) * 10) / 10)) + "px)");
    }

});

function fixVHChrome() {
    var options = [{
        selector: '.section',
        property: 'min-height',
        vh: 110,
    }, {
        selector: '.section:nth-child(2)',
        property: 'top',
        vh: 110
    }, {
        selector: '.section:nth-child(3)',
        property: 'top',
        vh: 220
    }, {
        selector: '.section:nth-child(4)',
        property: 'top',
        vh: 330
    }];

    var vhFix = new VHChromeFix(options);
}

function validateEmail(email) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}


function initSignup() {
    var email = document.getElementById('email'),
        button = document.getElementById('button'),
        label = document.getElementById('email-label');

    email.addEventListener('keydown', function() {
        var email = this.value;

        if (validateEmail(email)) {
            button.classList.add('is-active');
        }
    });

    button.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('is-done', 'is-active');
        label.innerHTML = "";
        email.value = "";

        setTimeout(function() {
            button.innerHTML = "Thanks!"
        }, 500);
    });

}
