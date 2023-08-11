const { generateIds } = require('./lib/generate-data');
const { greetByName } = require('./lib/greet');

// eslint-disable-next-line no-unused-vars
const greetMessage = greetByName('Jonh Doe');

// eslint-disable-next-line no-unused-vars
const mockIdsArray = generateIds(5);
