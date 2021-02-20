import store from "./store";
import { play } from "./reducers/gameReducer";
import Events from "./events";

class Testy {
  constructor(data) {
    this.data = data;
    this.testButton = document.querySelector("#testButton");
    this.eventHandler = new Events();
  }

  connect() {
    this.eventHandler.fire("testyConnected");
  }

  on(type, func) {
    this.eventHandler.addListeners(type, func);

    return this;
  }

  init() {
    console.log("initialized..");

    this.testButton.addEventListener("click", () => {
      store.dispatch(play({ value: 1 }));
    });
  }
}

export default Testy;
