
const monedas = document.querySelectorAll('.moneda');
const contador = document.querySelectorAll('.conteo');




let i = 0;

console.log(monedas);
console.log(contador);

monedas.forEach(item => {
    
    item.addEventListener('click', () => {
        item.classList.add('saltar');

        i++
        contador.textContent = `contador: ${i}`;

} )

    item.addEventListener('animationend', () => {
        item.computedStyleMap.display = 'none';
    }, {once: true} )
})