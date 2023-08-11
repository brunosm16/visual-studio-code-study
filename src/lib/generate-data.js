const { faker } = require('@faker-js/faker');

const generateIds = (amount = 10) => {
	const names = [];

	for (let i = 0; i <= amount; i += 1) {
		names.push(faker.string.uuid());
	}

	return names;
};

module.exports = { generateIds };
