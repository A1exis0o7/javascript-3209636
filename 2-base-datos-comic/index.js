const infocomic = document.querySelector('.Titulo');

const listaescenas = document.querySelector('.escenas');


console.log(infocomic);
console.log(listaescenas);



/* modificar el contenido de info general del comic */

infocomic.innerHTML = `



            



            <div class="Titulo">
             <h1 class="nombrecomic">${comic.nombrecomic}</h1>
             <p class="descripcion">${comic.descripcion}  </p>
             
                <div class="datos">
                <p class="year">${comic.year}</p> <p class="genero">${comic.genero}</p>
                </div>
             <p class="sinopsis">${comic.sinopsis}</p>
                <div class="creditos"> 
               ${comic.autores}
                </div>
        </div> 
         

                

`


listaescenas.innerHTML = ``