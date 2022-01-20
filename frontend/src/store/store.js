import { configureStore } from '@reduxjs/toolkit';

import homeStateReducer from './slices/homeStateSlice';

const store = configureStore({
	reducer: {
		homeState: homeStateReducer,
	},
});

const homeStateSelector = state => state.homeState;

export default store;
