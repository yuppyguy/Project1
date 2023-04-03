var btnCount = document.getElementById('btn-count');
var num = 0;
btnCount.onclick = function () {
    num = num + 1;
    document.querySelector('p').innerText = num.toString();
};
