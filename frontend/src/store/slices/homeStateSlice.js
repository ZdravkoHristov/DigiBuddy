import { createSlice } from '@reduxjs/toolkit';

const homeStateSlice = createSlice({
	name: 'homeState',
	initialState: {
		data: {
			activeForm: null,
			showForm: false,
		},
	},

	reducers: {
		setHomeData: (state, { payload }) => {
			state.data = { ...state.data, ...payload };
		},
	},
});

export default homeStateSlice.reducer;

export const { setHomeData } = homeStateSlice.actions;
