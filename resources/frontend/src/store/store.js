import { configureStore } from '@reduxjs/toolkit';

import homeStateReducer from './slices/homeStateSlice';
import navbarReducer from './slices/navbarSlice';
import teacherReducer from './slices/teacherSlice';
import studentReducer from './slices/studentSlice';
import loggedUiSlice from './slices/loggedUiSlice';

const store = configureStore({
	reducer: {
		homeState: homeStateReducer,
		navbar: navbarReducer,
		teacher: teacherReducer,
		student: studentReducer,
		loggedUi: loggedUiSlice,
	},
});

const homeStateSelector = state => state.homeState;
const navbarSelector = state => state.navbar;
const teacherSelector = state => state.teacher;
const studentSelector = state => state.student;
const loggedUiSelector = state => state.loggedUi;

export default store;

export {
	homeStateSelector,
	navbarSelector,
	teacherSelector,
	studentSelector,
	loggedUiSelector,
};
