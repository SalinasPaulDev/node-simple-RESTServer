const {response} = require('express');

const users_GET = (req, res = response) => {
    const {query} = req
	res.json({
		msj: 'GET api - controlador',
        query
	});
};

const users_POST = (req, res = response) => {
    const {nombre, edad} = req.body
	res.json({
        msg: 'Hola',
        nombre,
        edad
    });
};

const users_PUT = (req, res = response) => {
    const {id} = req.params
	res.json({
		msj: 'PUT api - controlador',
        id
	});
};

const users_PATCH = (req, res = response) => {
	res.json({
		msj: 'PATCH api - controlador',
	});
};

const users_DELETE = (req, res = response) => {
	res.json({
		msj: 'DELETE api - controlador',
	});
};

module.exports = {
	users_GET,
	users_POST,
	users_PATCH,
	users_DELETE,
	users_PUT,
};
