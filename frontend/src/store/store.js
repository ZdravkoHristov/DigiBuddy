import { configureStore } from '@reduxjs/toolkit';

import homeStateReducer from './slices/homeStateSlice';
import navbarReducer from './slices/navbarSlice';
import teacherReducer from './slices/teacherSlice';
import studentReducer from './slices/studentSlice';

const store = configureStore({
	reducer: {
		homeState: homeStateReducer,
		navbar: navbarReducer,
		teacher: teacherReducer,
		student: studentReducer,
	},
});

const homeStateSelector = state => state.homeState;
const navbarSelector = state => state.navbar;
const teacherSelector = state => state.teacher;
const studentSelector = state => state.student;

export default store;

export { homeStateSelector, navbarSelector, teacherSelector, studentSelector };
