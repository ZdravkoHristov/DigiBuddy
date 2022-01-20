import { createSlice } from '@reduxjs/toolkit';

const homeStateSlice = createSlice({
	name: 'homeState',
	initialState: {
		activeReg: null,
	},

	reducers: {
		changeActive: (state, { payload }) => {
			state.activeReg.activeReg = payload;
		},
	},
});

export default homeStateSlice.reducer;

export const { changeActive } = homeStateSlice.actions;
