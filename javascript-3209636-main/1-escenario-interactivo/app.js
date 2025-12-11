const monedas = document.querySelectorAll('.moneda');
console.log(monedas);//no puede dar null
const patos = document.querySelectorAll('.pato')
const comiendo = document.querySelectorAll('.comiendo')
const comer = new Audio ("sonidos/ou.mp3")
const bruja = document.querySelectorAll('.p2')
const posion = new Audio ("sonidos/pocion.mp3")
const zombi = document.querySelectorAll('.p1')
const gruñir = new Audio ("sonidos/Minecraft-Zombie-Sound-Effect.mp3")


let i = 0
let j = 0

// Contadores
let contadorMonedas = document.querySelector('.contadormonedas');
let contadorPatos = document.querySelector('.contadorpatos');
console.log(contadorMonedas);

//crear las funciones
comiendo.forEach( item => {
    item.addEventListener("click", () => {
        comer.play()
    })})
    bruja.forEach( item => {
    item.addEventListener("click", () => {
        posion.play()
    })})
    zombi.forEach( item => {
    item.addEventListener("click", () => {
        gruñir.play()
    })})
monedas.forEach( item => {
    //hace lo que yo le diga aqui
    //console.log("elemento: ", item);
    /* item.style.filter = "grayscale(1)"; */

    item.addEventListener("click", () => {//() =>  es igual a function
        item.classList.add("saltar")
        item.style.filter = "grayscale(1)"
        i++
        contadorMonedas.textContent = i
})

    item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true})

})

patos.forEach( item => {
    item.addEventListener("click", () => {
        item.classList.add("bajar")
        item.style.filter = "sepia(100%) saturate(500%) hue-rotate(-50deg)"
        j++ 
        contadorPatos.textContent = j
    })

    item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true})
})

//////////////////////////////////////////////////////////////
//carrusel
//1. variables
const escenas = document.querySelectorAll(".escena")
const btnanterior = document.querySelector(".boton1")
const btnsiguiente = document.querySelector(".boton2")
const miniaturas = document.querySelectorAll(".minifondo")
let indice = 0

console.log(escenas)
console.log(btnanterior)
console.log(btnsiguiente)
console.log(miniaturas)
//
//2.funciones
function mostrarEscena (i){
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove("activa") 
    }
    
    escenas[i].classList.add("activa")

    indice = i

}
mostrarEscena (2)

//funcion 
btnsiguiente.addEventListener("click",() =>{
    indice = indice - 1
    if (indice < 0){
        indice = escenas.length -1 //para ir a ultima imagen
    }
    mostrarEscena(indice)
})
btnanterior.addEventListener("click",() =>{
    indice = indice + 1
    if (indice > escenas.length -1){
        indice = 0 //para ir a primera imagen
    }
    mostrarEscena(indice)
})
//funcion miniatura
miniaturas.forEach((min,i) => {
    min.addEventListener("click", () =>{
        mostrarEscena(i)
    })
    
});

//3.sonidos



