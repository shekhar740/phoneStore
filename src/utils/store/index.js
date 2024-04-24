import {configureStore} from '@reduxjs/toolkit'
import FetchAct from './slice/FetchAct';
import LoggedUser from './slice/LoggedUser';
import addMessage from './slice/addMessage';


// import Loggeduser from './slice/Loggeduser';
// import Message from './slice/Message';




const store = configureStore({
    reducer : {
        FetchData : FetchAct,
        user : LoggedUser,
        // // user  : Loggeduser,
        message : addMessage,
    }
})


export {store};