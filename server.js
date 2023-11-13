const http = require('http');
const app = require('./serverside/app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.on('listening', () => {
    console.log(`Server started and running on port ${PORT}.`);
});

server.on('error', (error) => {
    console.error(`Error occurred: ${error.message}`);
});

server.listen(PORT);
