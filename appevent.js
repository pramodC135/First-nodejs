const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://' });

//Raise: logged (data: message)

//class MyEmitter extends EventEmitter {}

//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
// console.log('an event occurred!');
//});
//