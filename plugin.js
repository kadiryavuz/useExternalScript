import store from './store';
import { changeStatus } from './reducers/gameReducer';
import Events from './events';

import './index.css';

class Testy {
  constructor(data) {
    this.data = data;
    // this.testButton = document.querySelector("#testButton");
    this.eventHandler = new Events();
    this.board = document.getElementById(data.gameField);
  }

  setStatusLocal(param) {
    store.dispatch(
      changeStatus({ value: param }),
    );
  }

  connect() {
    this.eventHandler.fire('testyConnected');
  }

  on(type, func) {
    this.eventHandler.addListeners(type, func);

    return this;
  }

  init() {
    // this.testButton.addEventListener("click", () => {
    //  store.dispatch(play({ value: 1 }));
    // });

    this.initBoard();
    this.registerEvents();
  }

  initBoard() {
    const gameArea = document.createElement('div');
    gameArea.classList.add('gameBox-container');
    const startBtn = document.createElement('button');
    startBtn.setAttribute('id', 'clickToPlay');
    startBtn.textContent = 'Click To Play';

    gameArea.appendChild(startBtn);
    this.board.appendChild(gameArea);
  }

  registerEvents() {
    this.board.addEventListener('click', () => {
      // do nothing
    });
  }
}

export default Testy;
