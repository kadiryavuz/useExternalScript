import store from "./store";
import { play } from "./reducers/gameReducer";

class Testy {
  constructor(data) {
    this.data = data;
    this.testButton = document.querySelector("#testButton");
  }

  init() {
    console.log("initialized..");

    this.testButton.addEventListener("click", () => {
    store.dispatch(play({ value: 1 }));
        
    });
  }
}

export default Testy;
