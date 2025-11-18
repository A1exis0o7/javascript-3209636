const Titulo = document.querySelector('.info-comic');

const listaCapitulos = document.querySelector('.');


console.log(Titulo)
console.log(listaCapitulos)



/* modificar el contenido de info general del comic */

Titulo.innerHTML = `
         
            <div class="Titulo">
             <h1 class="nombrecomic">${comic.nombrecomic}</h1>
             <p class="descripcion">${comic.descripcion}  </p>
             
                <div class="datos">
                <p class="year">${comic.year}</p> <p class="genero">${comic.genero}</p>
                </div>
             <p class="sinopsis">${comic.sinopsis}</p>
                <div class="creditos"> 
                <p class="autores">${comic.autores}</p>
                <p class="autores">Alexis</p>
                <p class="autores">isabel</p>
                <p class="autores">miguel</p>
                <p class="autores">luna</p>
                </div>
        </div> 
         

                

`