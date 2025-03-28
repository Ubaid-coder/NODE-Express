class MyEventEmitter {
    constructor() {
        this._events = {}
    }

    on(eventName, handler) {
        if (this._events[eventName]) {
            this._events[eventName].push(handler);
        } else {
            this._events[eventName] = [handler];
        }
    }

    emit(eventName, ...args) {
        this._events[eventName]?.forEach(event => {
            event(...args);
        });

    }
}

const emitter = new MyEventEmitter();

emitter.on('x', () => {
    console.log('Emitted event x1');
})
emitter.on('x', (a, b, c) => {
    console.log('Emitted event x1');
    console.log(a, b, c);
})

emitter.emit('x', 1, 2, 3)