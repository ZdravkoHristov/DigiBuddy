import { createSlice } from '@reduxjs/toolkit';

const loggedUiSlice = createSlice({
	name: 'loggedUi',
	initialState: {
		uiInfo: {
			showStudentInfo: false,
			showAssignmentInfo: false,
			showCustomAssignment: false,
			reviewingCustomAssignment: false,
			customType: 'selectAnswer',
			showJoinClass: false,
			showNewFolder: false,
			folderIds: [],
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
