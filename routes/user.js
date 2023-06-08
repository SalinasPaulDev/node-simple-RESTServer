const {Router} = require('express');
const { getUsers, updateUser, createUser, deleteUser, disableUser } = require('../controllers/users');
const { check } = require('express-validator');
const Role = require('../models/role');
const { validationRole, validationEmail, validateUserExistById } = require('../helpers/db-validators');
const {validateFields} = require('../middlewares/validate-fields')


const router = Router()

router.get('/', getUsers);

router.put('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(validateUserExistById),
    check('role').custom(validationRole),
    validateFields
], updateUser);

router.post('/',[
    check('email', 'El email no es valido').isEmail(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 letras').isLength({min: 6}),
    check('email').custom(validationEmail),
    check('role').custom(validationRole),
    validateFields


], createUser);

router.delete('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(validateUserExistById),
    validateFields
], deleteUser);

router.delete('/disable/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(validateUserExistById),
    validateFields 
], disableUser)


module.exports = router