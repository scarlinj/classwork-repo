// var counterH1 = document.querySelector('#counter');

var counterH1 = $('#counter');
var decrementBtn = $('.dec');
var incrementBtn = $('.inc');

incrementBtn.on('click', function () {
    var count = Number(counterH1.text());
    count++;
    counterH1.text(count);
    // console.log(typeof count);
    // console.log(count);
});