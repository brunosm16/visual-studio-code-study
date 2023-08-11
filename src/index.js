require('dotenv/config');

const { generateIds } = require('./lib/generate-data');
const { greetByName } = require('./lib/greet');

// eslint-disable-next-line no-unused-vars
const environment = process.env.NODE_ENV;

// eslint-disable-next-line no-unused-vars
const greetMessage = greetByName('Jonh Doe');

// eslint-disable-next-line no-unused-vars
const mockIdsArray = generateIds(5);
