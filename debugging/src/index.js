const crypto = require('crypto');

const generateIds = () => {
	const idsArr = [];

	// eslint-disable-next-line no-plusplus
	for (let i = 0; i <= 50; i++) {
		idsArr.push(crypto.randomUUID());
	}

	return idsArr;
};

generateIds();
