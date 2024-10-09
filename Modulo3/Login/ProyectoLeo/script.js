document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('loginForm')
    const emailInput = document.getElementById('emailInput')
    const passwordInput = document.getElementById('password')
    const confirmPasswordInput = document.getElementById('confirmPassword')
    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')
    const confirmPasswordError = document.getElementById('confirmPasswordError')


    loginForm.addEventListener('submit', function(event){
        event.preventDefault()
        // agregar metodo que valida el form
    })

    emailInput.addEventListener('blur', function(){
        // agregar metodo que valide el mail
    })

    emailInput.addEventListener('change', function(){
        // agregar metodo que valide el mail
    })

    passwordInput.addEventListener('change', function(){
        // agregar metodo que valide el mail
    })

    confirmPasswordInput.addEventListener('change', function(){
        // agregar metodo que valide el mail
    })

    function validateForm(){

    }

    function validateEmail() {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim() // el trim lo que hace es eliminar espacios vacíos al comienzo y final del input

        if (!emailRegex.test(emailValue)) {
            showError(emailError, 'Ingresa un email válido')
            return false
        }

        return true
    }
})


