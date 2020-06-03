let event = require("events");
const eventEmitter = new event.EventEmitter();

eventEmitter.on("someEvent", (arg1, arg2) => {
  console.log("emitter1", arg1, arg2);
});

eventEmitter.on("someEvent", (arg1, arg2) => {
  console.log("emitter2", arg1, arg2);
});

eventEmitter.emit('someEvent', 'arg1...', 'arg2...')
