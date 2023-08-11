const DEFAULT_EMPTY_MESSAGE = 'No name provided';

const greetByName = (name) => {
	if (!name) return DEFAULT_EMPTY_MESSAGE;
	return `Welcome ${name}`;
};

module.exports = { greetByName };
