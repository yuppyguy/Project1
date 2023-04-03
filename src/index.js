var btnCount = document.getElementById('btn-count');
var counter = document.querySelector('p');
var num = 0;
btnCount === null || btnCount === void 0 ? void 0 : btnCount.addEventListener('click', function () {
    console.log(num);
    num = num + 1;
    if (counter) {
        counter.innerText = num.toString();
    }
});
