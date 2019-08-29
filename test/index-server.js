const ServerInterface = require('./interface');
const startServer = require('../server');

startServer('amqp://localhost:5672', 'fila_de_teste', ServerInterface).then((e) => {
    console.log(e);
});

module.exports.Server;