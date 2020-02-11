// even saat di click
$('.page-scroll').on('click', function (e) {

    //ambil hreff
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elemenTujuan = $(tujuan);
    // memindahkan scroll
    $('html, body').animate({

        scrollTop: elemenTujuan.offset().top - 58
    }, 1000, 'easeInOutExpo');
    e.preventDefault();

});

// paralax
// $(window).scroll(function () {
//     var wScroll = $(this).scrollTop();

//     $('.jumbotron .display-4').css({
//         'transform': 'translate(0px, ' + wScroll / 0.6 + '%)'
//     });

//     $('.jumbotron p').css({
//         'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
//     });

// });