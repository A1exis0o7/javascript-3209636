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


comic.escenas.forEach(escena => {

const micard = document.createElement("div")
micard.classList.add(".fondo")
micard.innerHTML = `
 <div class="escenas">
            <h1 class="Genero">  </h1>
            <div class="miniaturas">
                <div class="escena escena1">
                    <p></p>
                </div>
                <div class="escena escena2">
                    <p></p>
                </div>
                <div class="escena escena3">
                    <p></p>
                </div>
                <div class="escena escena4">
                    <p></p>
                </div>
                <div class="escena escena5">
                    <p></p>
                </div>
            </div>    
        </div>
`
infoComic.appendChild(micard)
console.log(escena.nombre)

});