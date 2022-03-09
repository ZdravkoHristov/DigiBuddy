import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
	name: 'navbar',
	initialState: {
		active: '',
		burgerData: {
			show: false,
			items: [],
			activeText: '',
		},
	},

	reducers: {
		setActive: (state, { payload }) => {
			state.active = payload;
		},

		setBurgerData: (state, { payload }) => {
			state.burgerData = { ...state.burgerData, ...payload };
		},
	},
});

export default navbarSlice.reducer;

export const { setActive, setBurgerData } = navbarSlice.actions;
