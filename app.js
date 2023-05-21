const express = require('express');
const Server = require('./models/server');
const app = express();
require('dotenv').config();

const server = new Server();

server.listener();
