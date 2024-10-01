// creando un nodo de parrafo
const paragraph = document.createElement('p')
// aca creamos un elemento de texto
const node = document.createTextNode('Este es el contenido nuevo')
// aca incorporamos el elemento de texto al nodo de parrafo
paragraph.appendChild(node)
// en la variable container tenemos el div
const container = document.getElementById('div1')
const p1 = document.getElementById('p1')
container.insertBefore(paragraph, p1)

const p2 = document.getElementById('p2')
p2.remove()