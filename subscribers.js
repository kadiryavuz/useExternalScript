import { selectMessage } from './reducers/gameReducer';
import store from './store';


export const handleMessage = () => {
    const message = selectMessage(store.getState());
    console.log("Subscriber => ", message);
    
}