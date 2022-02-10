import { createSlice } from '@reduxjs/toolkit';

const loggedUiSlice = createSlice({
	name: 'loggedUi',
	initialState: {
		uiInfo: {
			showStudentInfo: false,
			showAssignmentInfo: false,
			showCustomAssignment: true,
			customType: 'singleAnswer',
			showJoinClass: false,
			activeClass: null,
			activeStudent: null,
			activeAssignment: null,
		},
	},

	reducers: {
		setUiInfo: (state, { payload }) => {
			state.uiInfo = { ...state.uiInfo, ...payload };
		},
	},
});

export default loggedUiSlice.reducer;

export const { setUiInfo } = loggedUiSlice.actions;
