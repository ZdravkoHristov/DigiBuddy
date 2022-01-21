import { configureStore } from '@reduxjs/toolkit';

import homeStateReducer from './slices/homeStateSlice';
import navbarReducer from './slices/navbarSlice';

const store = configureStore({
	reducer: {
		homeState: homeStateReducer,
		navbar: navbarReducer,
	},
});

const homeStateSelector = state => state.homeState;
const navbarSelector = state => state.navbar;

export default store;

export { homeStateSelector, navbarSelector };
