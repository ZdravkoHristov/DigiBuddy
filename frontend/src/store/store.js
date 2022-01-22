import { configureStore } from '@reduxjs/toolkit';

import homeStateReducer from './slices/homeStateSlice';
import navbarReducer from './slices/navbarSlice';
import teacherReducer from './slices/teacherSlice';

const store = configureStore({
	reducer: {
		homeState: homeStateReducer,
		navbar: navbarReducer,
		teacher: teacherReducer,
	},
});

const homeStateSelector = state => state.homeState;
const navbarSelector = state => state.navbar;
const teacherSelector = state => state.teacher;

export default store;

export { homeStateSelector, navbarSelector, teacherSelector };
