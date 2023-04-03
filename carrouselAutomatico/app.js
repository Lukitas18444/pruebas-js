const carrousel = document.querySelector(".carrousel-items");

let intervalo = null;
let step = 1;
let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;

const start = () =>{
    intervalo = setInterval (function () {
        carrousel.scrollLeft = carrousel.scrollLeft + step;
        if(carrousel.scrollLeft === maxScrollLeft){
            step = -1;
        } else if (carrousel.scrollLeft === 0){
            step = 1;
        }
    }, 10);
}

const stop = () => {
    clearInterval(intervalo);
}

carrousel.addEventListener('mouseover', () => {
    stop();
});
carrousel.addEventListener('mouseout', () => {
    start();
});


start();