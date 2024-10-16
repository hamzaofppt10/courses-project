import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import mainReducer from './mainReducer';

const store = configureStore({
    reducer: {
        login: loginReducer,
        courses: mainReducer
    }
});

export default store;
