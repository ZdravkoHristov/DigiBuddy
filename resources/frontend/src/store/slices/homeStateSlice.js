import { createSlice } from '@reduxjs/toolkit';

const homeStateSlice = createSlice({
	name: 'homeState',
	initialState: {
		activeForm: null,
		activeNavItem: 'home',
	},

	reducers: {
		changeActive: (state, { payload }) => {
			state.activeForm = payload;
		},
		changeActiveNavItem: (state, { payload }) => {
			state.activeNavItem = payload;
		},
	},
});

export default homeStateSlice.reducer;

export const { changeActive, changeActiveNavItem } = homeStateSlice.actions;
