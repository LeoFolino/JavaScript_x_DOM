// document.getElementById('test').innerHTML = 'Hola Mundo desde JS' // esto selecciona 1 solo elemento y por eso es modificable

// document.getElementsByClassName // esto selecciona varios elementos

const salutations = document.querySelectorAll('p.saludo')

document.getElementById('test').innerHTML = 'En este parrafo vamos a estar escribiendo el primero de los saludos el cual es: ' + salutations[0].innerHTML

const form = document.forms['form1']
let text = ''
for (let i =0 ; i < form.length ; i++){
    text += form.elements[i].value + '<br>'
}

document.getElementById('test').innerHTML = text