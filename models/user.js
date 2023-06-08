// EXAMPLE
// {
//     name: 'asd',
//     email: 'asd@gmail.com',
//     password: '1231212313' hashing,
//     img: '12312313' img del usuario
//     rol: 'qwqweqe' 
//     estado: false,
//     google: false  verifica si el usuario fue creado con google o no
// }

const {Schema, model}  = require('mongoose')

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    image: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

})

//delete values to response
userSchema.methods.toJSON = function() {
    const {__v, password, ...user} = this.toObject(); 
    return user
}

module.exports = model('User', userSchema);