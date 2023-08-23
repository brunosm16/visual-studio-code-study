const http = require('http');
const { faker } = require('@faker-js/faker');

const PORT = process.env.PORT ?? 3000;

const message = faker.lorem.word();

const listener = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
	res.end(`message: ${message}`);
};

const server = http.createServer(listener);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
