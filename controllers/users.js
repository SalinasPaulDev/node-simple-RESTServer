const {response} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const getUsers = async(req, res = response) => {
	const {query} = req;
	const userActive = {status: true}

	const [total, users] = await Promise.all([
		User.countDocuments(userActive),
		User.find(userActive)
			.skip(query.skipTo)
			.limit(query.limit)
	])
	res.json({
		total,
		users
	});
};

const createUser = async (req, res = response) => {


	const {name, email, password, role} = req.body;
	const user = new User({name, email, password, role});

	//crypt password

	const salt = bcryptjs.genSaltSync(10);
	user.password = bcryptjs.hashSync(password, salt);

	await user.save();
	res.json({
		user,
	});
};

const updateUser = async (req, res = response) => {
	const {id} = req.params;
	const { _id, password, google, email, ...rest} = req.body;
	//TODO: validar id contra base de datos

	if (password) {
		const salt = bcryptjs.genSaltSync(10);
		rest.password = bcryptjs.hashSync(password, salt);
	}
	const user = await User.findByIdAndUpdate(id, rest);
	res.json({
		user,
	});
};

const disableUser = async(req, res = response) => {
	const {id} = req.params
	const userDeleted = await User.findByIdAndUpdate(id, {status: false})
	res.json(userDeleted);
};

const deleteUser = async(req, res = response) => {
	const {id} = req.params
	const userDeleted = await User.findByIdAndDelete(id)
	res.json(userDeleted);
};

module.exports = {
	getUsers,
	createUser,
	disableUser,
	deleteUser,
	updateUser,
};
