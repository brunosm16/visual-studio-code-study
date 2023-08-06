const crypto = require('crypto');

const generateIds = () => {
	const ids = [];

	// eslint-disable-next-line no-plusplus
	for (let i = 0; i <= 50; i++) {
		ids.push(crypto.randomUUID());
	}

	return ids;
};

generateIds();
