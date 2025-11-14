const Titulo = document.querySelectorAll('.Titulo');

const listaCapitulos = document.querySelectorAll('.catalogo');


console.log(Titulo)
console.log(listaCapitulos)



/* modificar el contenido de info general del comic */

Titulo.innerHTML = `
         
             <h1 class="nombrecomic">${comic.nombrecomic}</h1>
             <p>${comic.descripcion}</p>
             
             <div class="genero">${comic.genero.join(",<p>2025</p> <p>Ficcion</p>")}
                <p>2025</p> <p>Ficcion</p>
             </div>
             <p class="sinopsis">${comic.sinopsis} </p>
             <div class="creditos"> 
                <p>Autores</p>
                <p>Alexis</p>
                <p>isabel</p>
                <p>miguel</p>
                <p>luna</p>s
             </div>
         

                

`