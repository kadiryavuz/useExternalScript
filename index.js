import Testy from "./plugin"

window.addEventListener('DOMContentLoaded', (event) => {
    const config = {
        gameField: 'gameBox'
    }
    
    window.TestyJS = new Testy(config);
    window.TestyJS.init();
});