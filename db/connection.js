const environment = 'development';
const config = require('../knexfile.js');
const environmentConfig = config[environment];
const knex = require('knex');
const connections = knex(environmentConfig);

module.exports = connections;