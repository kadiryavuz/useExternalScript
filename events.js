import nanoid from "nanoid";

class Events {
  constructor() {
    this.constKey = nanoid();
    this.eventStore = new WeakMap();
  }

  init() {
    this.eventStore.set(this.constKey, { listeners: {} });
  }
}

export default Events;
