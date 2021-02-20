import Testy from "./plugin"

window.addEventListener('DOMContentLoaded', (event) => {
    const config = {
        gameField: 'gameBox'
    }
    
    window.TestyJS = new Testy(config);

    //demonstrating script ready condition
    setTimeout(() => {
        window.TestyJS.connect();
    }, 3000);

    window.TestyJS.on('testyConnected', (data) => {
        console.log("TestyJS is fully connected: ", data);
        TestyJS.init();
    })
   
});



