const { faker } = require('@faker-js/faker');

const generateNames = () => {
	const names = [];

	for (let i = 0; i <= 50; i += 1) {
		names.push(faker.person.firstName());
	}

	return names;
};

generateNames();
