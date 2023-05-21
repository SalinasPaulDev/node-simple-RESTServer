const express = require('express');
require('dotenv').config();
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 3000;

		//Middlewares
		this.middlewares();

		//rutas de mi app
		this.routes();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

        //lectura y parseo del body

        this.app.use(express.json())

		//Directiorio publico
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use('/api/users', require('../routes/user'))
	}

	listener() {
		this.app.listen(this.port, () => {
			console.log('puerto', this.port);
		});
	}
}

module.exports = Server;
