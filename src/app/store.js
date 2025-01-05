import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: taskReducer
})