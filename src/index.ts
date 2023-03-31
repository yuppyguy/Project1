const btnCount = document.getElementById('btn-count');
let num = 0;

btnCount.onclick = function() {
    num = num + 1;
    document.querySelector('p').innerText = num.toString();
};