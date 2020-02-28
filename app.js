console.log('Let\'s get ready to pary with jQuery!');

$('article img').addClass('image-center');

$('p').eq(5).remove();

$('h1').css('font-size', '98px');

$('ol').append('<li>Hey it\'s jQuery adding elements!');

$('aside').empty().append('<p>Sorry I guess we\'re not happy about jQuery</p>');

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
  });

$('img').on('click', function () {
    $(this).remove();
});