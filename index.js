import Testy from "./plugin";
import { GameStatus } from './config';

window.addEventListener('DOMContentLoaded', (event) => {
    const config = {
        gameField: 'gameBox'
    }
    
    window.TestyJS = new Testy(config);
    window.TestyJS.setStatus(GameStatus.LOADING);
    //demonstrating script ready condition
    setTimeout(() => {
        window.TestyJS.connect();
    }, 3000);

    window.TestyJS.on('testyConnected', (data) => {
        console.log("TestyJS is fully connected: ", data);
        window.TestyJS.setStatus(GameStatus.READYTOPLAY);
        TestyJS.init();
    })
   
});



