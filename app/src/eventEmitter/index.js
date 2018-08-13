class EventEmitter {
  constructor() {
    this.events = {}
  }

  subscribe = (eventName, fn) => {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(fn)

    // We need a way to unregister those functions when we don’t need them anymore because if you don’t do this, you will have a memory leak.
    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn)
    }
  }

  emit = (eventName, data) => {
    const the_event = this.events[eventName]
    if(the_event) {
      the_event.forEach(fn => {
        fn.call(null, data)
      })
    }
  }

}

export const emitter = new EventEmitter()