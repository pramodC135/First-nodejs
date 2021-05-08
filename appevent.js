const EventEmitter = require('events');


const Logger= require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');

//Raise: logged (data: message)

//class MyEmitter extends EventEmitter {}

//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
// console.log('an event occurred!');
//});
//