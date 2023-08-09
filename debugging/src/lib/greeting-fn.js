const DEFAULT_EMPTY_MESSAGE = 'No name provided';

const invalidName = (name) => !name;

const buildGreetMessage = (name) => {
	if (invalidName(name)) return DEFAULT_EMPTY_MESSAGE;
	return `Welcome ${name}`;
};

module.exports = { buildGreetMessage };
