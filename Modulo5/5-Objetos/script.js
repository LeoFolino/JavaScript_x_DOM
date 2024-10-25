class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(nombre){
        console.log(`${this.nombre} dice: Hola, como estas ${nombre}?`)
    }

     decirEdad(nombre){
         console.log(`${this.nombre} dice: Yo tengo ${this.edad} años, señor ${nombre}?`)
     }
}

const persona1 = new Persona('Pedro', 25)
const persona2 = new Persona('Patricia', 33)

persona1.saludar('Ana')
persona2.saludar('Emilio')
persona1.decirEdad('Ana')
persona2.decirEdad('Emilio')