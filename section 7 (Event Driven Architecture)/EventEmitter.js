import EventEmitter from 'events'

const emitter = new EventEmitter();

emitter.setMaxListeners(3)

emitter.on('abc', () => {
    console.log('abc event fire1');
})

emitter.on('x', () => {
    console.log('x event fire2');
})

emitter.on('y', () => {
    console.log('y event fire2');
})

emitter.on('x', () => {
    console.log('x event fire2');
})

emitter.on('x', () => {
    console.log('x event fire2');
})

// emitter.on('x', () => {
//     console.log('x event fire2');
// })

emitter.emit('x')