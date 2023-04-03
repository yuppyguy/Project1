const btnCount = document.getElementById('btn-count');
const counter = document.querySelector('p');

let num = 0;

btnCount?.addEventListener('click',()=> {
    console.log(num)
    num = num + 1;
    if (counter) {
        counter.innerText = num.toString();
    }
})
