const users = ['Admin', 'Seller', 'Product Owner']

const sendNotifications = (userName) => {
    console.log(`Como estas? ${userName} te enviamos una notificacion`)
}

function sendToUser(array,action){
    array.map(e => action(e))
    console.log('La tarea ha concluido')
}

sendToUser(users, sendNotifications)