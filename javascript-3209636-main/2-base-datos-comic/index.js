import { comic } from "./bs.js"
const infocomic = document.querySelector('.Titulo');

const listaescenas = document.querySelector('.contenedorEscenas');


console.log(infocomic);
console.log(listaescenas);



/* modificar el contenido de info general del comic */

infocomic.innerHTML = `



            



            
                <div class="datos">
                <p class="year">${comic.year}</p> <p class="genero">${comic.genero}</p>
                </div>
             <p class="sinopsis">${comic.sinopsis}</p>
                <div class="creditos"> 
               ${comic.autores}
                </div>
        </div> 
         

        <div class="Titulo">
             <h1 class="nombrecomic">${comic.nombrecomic}</h1>
             <p class="descripcion">${comic.descripcion} </p>
             
                <div class="datos">
                <p class="year">Año: ${comic.year}</p> <p class="genero">Genero: ${comic.genero}</p>
                </div>
             <p class="sinopsis"> “${comic.sinopsis}”</p>
                <div class="creditos"> 
                ${comic.autores.join( )}
                </div>
        </div> 
                

`


comic.escenas.forEach( escenas => {
    const miCard = document.createElement("div");
    miCard.classList.add("tarjeta-cap");
    miCard.innerHTML = `

        <a href="ecena.html?id=${escenas.id}">
        <img class="imagensize" src="${escenas.image}" alt="">
        <p>${escenas.nombre}</p>

        </a>    
    `
    infocomic.appendChild(miCard);
    console.log(escenas.nombre);
    
});




comic.person.forEach( escena => {
    const micard = document.createElement("div");
    micard.classList.add("tarjeta-person");
    micard.innerHTML =`
    <a href="ecena,html?id=${person.id}">
   

    <img class="imagensize" src="${escena.image}" alt="">
    <p>${escena.name}</p>
    </a>

    `
    personajes.appendChild(micard);
    console.log(escena.nombre)
})