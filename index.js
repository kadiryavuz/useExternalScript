import Testy from './plugin';
import { GameStatus } from './config';

window.addEventListener('DOMContentLoaded', () => {
  const config = {
    gameField: 'gameBox',
  };

  window.TestyJS = new Testy(config);
  window.TestyJS.setStatus(GameStatus.LOADING);
  // demonstrating script ready condition
  setTimeout(() => {
    window.TestyJS.connect();
  }, 3000);

  window.TestyJS.on('testyConnected', () => {
    window.TestyJS.setStatus(GameStatus.READYTOPLAY);
    window.TestyJS.init();
  });

  // TODO: set following when client clicked to play
  // window.TestyJS.setStatus(GameStatus.READYTOPLAY);
});
