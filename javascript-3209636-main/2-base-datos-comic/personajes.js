import { comic } from "./bd.js"

//const parametros = new URLSearchParams("windows.location.search")
//const parametros = new URLSearchParams("id")
const param = new URLSearchParams(window.location.search)
const id = param.get("id")
const personaje = comic.person.find(p => p.id == id)
const contenedor = document.querySelector (".contenedor")
contenedor.innerHTML = `

  <div class="contenedor">

            
            
            <img src="${personaje.image}" alt="">

            <div class="info">
               <h1>${personaje.name}</h1>
                <p>${personaje.descripcion}</p>
            </div>

`