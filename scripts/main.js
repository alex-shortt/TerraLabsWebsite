function getWindowScroll(num) {
    var s = $(window).scrollTop(),
        d = $(".section:nth-child(" + num + ")").offset().top;
        c = $(window).height();

    return Math.abs(( d - s) / (d + c));
}

$(window).scroll(function(event) {
    $('.section:nth-child(1) .background-image').css('webkitFilter', "blur(" + (Math.round(10 * getWindowScroll(1) * 100) / 100) + "px)");
    $('.section:nth-child(2) .background-image').css('webkitFilter', "blur(" + (1 + Math.round(10 * getWindowScroll(2) * 100) / 100) + "px)");
});
