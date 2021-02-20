import nanoid from "nanoid";

class Events {
  constructor() {
    this.constKey = nanoid();
    this.eventStore = new Map().set(this.constKey, { listeners: {} });
  }

  addListeners(type, func) {
    let _listeners = this.eventStore.get(this.constKey).listeners;

    if(!_listeners[type]) {
        _listeners[type] = [];
    }

    _listeners[type].push(func);

  }

  removeListeners(type, func) {
      let _listeners = this.eventStore.get(this.constKey).listeners[type];
      if(!_listeners) {
          return;
      }

      let _index = _listeners.indexOf(func);
      while(_index > -1) {
          _listeners.splice(_index, 1);
          _index = _listeners.indexOf(func);
      }

  }

  fire(type, event, data) {
      if(!type) {
          return;
      }

      if(!event) {
          event = {};
      }

      if(!event.type) {
          event.type = type;
      }

      if(!event.target) {
          event.target = this;
      }

      let _listeners = this.eventStore.get(this.constKey).listeners[type];
      if(!_listeners) {
          return;
      }

      _listeners.forEach(element => {
          element(event, data);
      });
  }
}

export default Events;
