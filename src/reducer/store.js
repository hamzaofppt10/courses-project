import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import coursesReducer from './coursesSlice';

const store = configureStore({
    reducer: {
        login: loginReducer,
        courses: coursesReducer,
    }
});

export default store;
