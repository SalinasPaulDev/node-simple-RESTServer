const {Router} = require('express');
const { users_GET, users_PUT, users_POST, users_DELETE, users_PATCH } = require('../controllers/users');

const router = Router()

router.get('/', users_GET);

router.put('/:id', users_PUT);

router.post('/', users_POST);

router.delete('/', users_DELETE);

router.patch('/', users_PATCH);

module.exports = router