// const doValidation = () => {
//     const number = document.getElementById('number')
//     if(!number.checkValidity()) {
//         document.getElementById('error').innerHTML = number.validationMessage
//     } else {
//         document.getElementById('error').innerHTML = 'El numero esta correcto'
//     }
// } 

const doValidation = () => {
    const number = document.getElementById('number')
    document.getElementById('error').innerHTML = number.checkValidity() 
    ? 'El numero esta correcto' 
    : number.validiationMessage
}