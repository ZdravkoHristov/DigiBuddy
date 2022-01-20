import { createSlice } from '@reduxjs/toolkit';

const homeStateSlice = createSlice({
	name: 'homeState',
	initialState: {
		activeForm: null,
	},

	reducers: {
		changeActive: (state, { payload }) => {
			state.activeForm = payload;
		},
	},
});

export default homeStateSlice.reducer;

export const { changeActive } = homeStateSlice.actions;
