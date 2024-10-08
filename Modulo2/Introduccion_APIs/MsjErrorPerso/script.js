// const doValidation = () => {
//     const number = document.getElementById('number')
//     if(!number.checkValidity()) {
//         document.getElementById('error').innerHTML = number.validationMessage
//     } else {
//         document.getElementById('error').innerHTML = 'El numero esta correcto'
//     }
// } 

const doValidation = () => {
    const name = document.getElementById('name')
    document.getElementById('error').innerHTML = name.checkValidity() 
    ? 'El nombre esta correcto' 
    : 'El nombre es requerido, debes completar este campo' 
}