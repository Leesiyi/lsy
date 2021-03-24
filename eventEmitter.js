class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName,callback){
        if(!this.events[eventName]) {
            this.events[eventName] = [callback]
        } else {
            this.events[eventName].push(callback)
        }
    }
    emit(eventName,...rest){
        this.events[eventName] && this.events[eventName].forEach(cb => cb.apply(this,rest));
    }
    removeListener(eventName,callback){
        if(this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(cb => cb != callback)
        }
    }
    once(eventName,callback){
        let fn = () => {
            callback();
            this.removeListener(eventName,fn)
        }
        this.on(eventName,fn)
    }
}
let em = new EventEmitter();
em.on('start',function(res){
    console.log(`on${res}`);
})
em.emit('start','emit')