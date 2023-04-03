var menu = document.querySelector(".trabajos")
var nav__2 = document.querySelector(".nav__2")

menu.addEventListener('click', () =>{
    nav__2.setAttribute("style", "display: flex");
})


var imagenes = ['fotos/Boca/Foto1.jpg', 
'fotos/Cocinas/Foto1.jpg','fotos/HierroYMadera/foto1.jpg',
 'fotos/HierroYMadera/foto2.jpg'],
    cont = 0;

function carrousel(container_imagen){
    container_imagen.addEventListener('click', e => {
        var atras = container_imagen.querySelector('.atras'),
            adelante = container_imagen.querySelector('.adelante'),
            img = container_imagen.querySelector('.imagenes'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        } else if(tgt == adelante){ 
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }   
    });
}

document.addEventListener("DOMContentLoaded",() => {
    let container = document.querySelector('.container-imagen');

    carrousel(container);
});
/*nav.classList.toggle('show')*/