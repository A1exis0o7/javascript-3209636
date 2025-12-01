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


comic.escenas.forEach( escena => {
    const miCard = document.createElement("div");
    miCard.classList.add("tarjeta-cap");
    miCard.innerHTML = `

        <a href="ecena,html?id=${escena.id}">
        <img class="imagensize" src="${escena.image}" alt="">
        <p>${escena.nombre}</p>

        </a>    
    `
    infocomic.appendChild(miCard);
    
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