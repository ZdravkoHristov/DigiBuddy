import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
	name: 'navbar',
	initialState: {
		active: '',
	},

	reducers: {
		setActive: (state, { payload }) => {
			state.active = payload;
		},
	},
});

export default navbarSlice.reducer;

export const { setActive } = navbarSlice.actions;
