const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
       await mongoose.connect(process.env.MONGODB_CNN)

       console.log('base de datos online')
        
    } catch (error) {
            console.log(err)
            throw new Error('hubo un problema en la conexion de la db')
    }
}

module.exports = dbConnection