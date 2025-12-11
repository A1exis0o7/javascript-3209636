import { comic } from "./bs.js"

const  param = new URLSearchParams(window.location.search)
const id = param.get("id")
const escenas = comic.escenas.find(p => p.id == id)
const contenedor = document.querySelector (".cotenido")
contenedor.innerHTML = `
<div class="contenido">


            <div class="video">
            <video src="${escenas.video}" controls width="500">


               
            </video>

            <div class="descripcion">
                <h1>${escenas.nombre}</h1>
                <p>${escenas.sinopsis} </p>
            </div>

        </div>
`