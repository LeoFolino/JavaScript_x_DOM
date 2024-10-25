class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(nombre){
        return`${this.nombre} dice: Hola, como estas ${nombre}?`
    }

     decirEdad(nombre){
        return`${this.nombre} dice: Yo tengo ${this.edad} años, ${nombre}`
     }
}

class Alumno extends Persona{
    constructor(nombre, edad, curso){
        super(nombre, edad)
        this.curso = curso
    }

    presentarse(){
        return `${super.saludar('profesor')} soy un alumno del curso ${this.curso}`
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, materia){
        super(nombre, edad)
        this.materia = materia
    }

    presentarse(){
        return`${super.saludar('estudiantes')}, soy el profesor de ${this.materia}`
    }
}

function saludarYDecirEdad(){
    const nombreInput = document.getElementById('nombreInput').value
    const edadInput = document.getElementById('edadInput').value
    const rolSelect = document.getElementById('rolSelect').value

    if(nombreInput.trim() == '' || edadInput.trim() == '' || invitadoInput.trim() == ''){
        alert('Los campos son obligatorios')
        return
    }

    let persona

    switch (rolSelect) {
        case 'Alumno':
            const cursoInput = prompt('Ingrese el curso del alumno')
            persona = new Alumno(nombreInput, edadInput, cursoInput)
            break;
        case 'Profesor':
            const materiaInput = prompt('Ingrese la materia del profesor')
            persona = new Profesor(nombreInput, edadInput, materiaInput)
            break;
        default:
            alert('Debe seleccionar un rol')
            break;
    }


    const presentacion = persona.presentarse()
    const saludo = persona.saludar('Invitado')
    const edadMsj = persona.decirEdad('Invitado')

    const resultado = document.getElementById('res')
    resultado.innerHTML = `<p>${saludo}</p> <p>${edadMsj}</p> <p>${presentacion}</p>`
}

