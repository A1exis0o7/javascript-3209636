 const infoComic = document.querySelector('.info-comic');

const listaCapitulos = document.querySelector('.catalogo');


console.log(infoComic)
console.log(listaCapitulos)





infoComic.innerHTML = `
         <p>${comic.year}</p>
        <h1>${comic.nombrecomic}</h1>
        <p>${comic.sinopsis}</p>
        <p>${comic.genero.join(",")}</p>
        <p>${comic.personajes.join(",")}</p>`


/* console.log(comic.escenas) */



comic.escenas.forEach(escena => {

const micard = document.createElement("div")
micard.classList.add("tarjeta-cap")
micard.innerHTML = `
<img src="${escena.image}" />
<p>${escena.nombre} </p>
`
infoComic.appendChild(micard)
console.log(escena.nombre)

});
