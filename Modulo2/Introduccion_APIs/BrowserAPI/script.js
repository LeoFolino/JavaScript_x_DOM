const geolocation = document.getElementById('ubicacion')

const showPosition = position =>{
    geolocation.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br>La longitud es: ' + position.coords.longitude
}

const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        geolocation.innerHTML = 'La Geolocalizacion esta apagada o no funciona pa'
    }
}