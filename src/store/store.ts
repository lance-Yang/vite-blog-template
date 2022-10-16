import { configureStore } from '@reduxjs/toolkit';
// import loginApi from './loginApi';
// import homeApi from './homeApi';
// import homeReducer from './homeSlice';
// import counterReducer from '../features/counter/counterSlice';
import {mdReducer} from './mdSlice'
import mdApi from './mdApi';

const store = configureStore({
	reducer: {
		[mdApi.reducerPath]: mdApi.reducer,
		// [homeApi.reducerPath]: homeApi.reducer,
		// home : homeReducer
        mdReducer:mdReducer
	},
	// middleware: (middle) => middle().concat([ loginApi.middleware, homeApi.middleware ])
	middleware: (middle) => middle().concat([ mdApi.middleware ])
});

export default store
