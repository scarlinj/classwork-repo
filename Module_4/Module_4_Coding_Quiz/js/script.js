var timer = 5
var timeEl = document.getElementById("timer")

document.getElementById("start-quiz").addEventListener("click", function () {
    timeEl.innerHTML = "";

    timeEl.textContent = timer;

    var countdown = setInterval(function () {
        timer--
        timeEl.textContent = timer;
        if (timer == 0) {
            clearInterval(countdown);
        }
    }, 1000);

})