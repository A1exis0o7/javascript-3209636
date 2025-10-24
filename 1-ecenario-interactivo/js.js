
const monedas = document.querySelectorAll(".moneda");
const contador = document.querySelector(".conteo");
let numero = 0;





console.log(monedas)
console.log(contador)

monedas.forEach(item => {
    
    item.addEventListener("click", () => {
        item.classList.add("saltar");

        numero++
        if (contador) {
            contador.textContent = numero;
        }

} )

    item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true} )
})

//**juego 2//**


const monedas2 = document.querySelectorAll(".huevo");
const contador2 = document.querySelector(".conteo2");
let numero2 = 0;





console.log(monedas2)
console.log(contador2)

monedas2.forEach(item => {
    
    item.addEventListener("click", () => {
        item.classList.add("saltar");

        numero++
        if (contador2) {
            contador2.textContent = numero;
        }

} )

    item.addEventListener("animationend", () => {
        item.style.display = "none"
    }, {once: true} )
})

