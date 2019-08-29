const { Handler, connectionClient } = require('../client');

async function mainClient() {
    const connection = await connectionClient('amqp://localhost:5672', 'fila_de_teste');
    const handlers = await Handler.getHandlers();
    console.log(handlers);

    Handler.foo = async num => { };
    Handler.bar = async str => { };

    const target = 'foo';
    const getFoo = await Handler[target]({ solteiro: true, idade: 22, name: 'balde' }, { return: 'String' });
    console.log(getFoo);

    connection.close();
}
mainClient();

module.exports.Client;