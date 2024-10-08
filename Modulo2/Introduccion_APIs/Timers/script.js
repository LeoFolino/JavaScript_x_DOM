const action = () => {
    setTimeout(() => {
      console.log("Esta accion es la del boton")  
    }, 2300)
}

const action2 = () => {


    const interval = setInterval(() => {
        console.log("Esta accion sale del boton")  
    },2000)

    const timeOut = setTimeout(() => {
        clearInterval(interval)
    },10000)

    clearTimeout(timeOut)
}