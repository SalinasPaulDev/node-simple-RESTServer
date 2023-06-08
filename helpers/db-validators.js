const  Role = require('../models/role');
const User = require('../models/user');

const validationRole = async(role = '') => {
    const existRole = await Role.findOne({ role });
    if(!existRole) {
        throw new Error('Este rol no es valido para la creacion de usuarios');
    }
}

const validationEmail = async(email = '') => {
    const verifyEmailExist = await User.findOne({email});
    if(verifyEmailExist) {
        throw new Error('Este email ya existe');
    }
}

const validateUserExistById = async(id) => {
    const verifyIdExist = await User.findById(id);
    if(!verifyIdExist) {
        throw new Error('Este id no existe');
    }
}




module.exports = {
    validationRole,
    validationEmail,
    validateUserExistById
}