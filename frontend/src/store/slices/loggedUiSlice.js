import { createSlice } from '@reduxjs/toolkit';

const assignmentTypes = {
	choose: 'Задачи с избираем отговор',
	open: 'Задачи с отворен отговор',
};

const loggedUiSlice = createSlice({
	name: 'loggedUi',
	initialState: {
		uiInfo: {
			showStudentInfo: false,
			showAssignmentInfo: false,
			showCustomAssignment: false,
			showFileModal: true,
			reviewingModal: false,
			customType: 'selectAnswer',
			showJoinClass: false,
			showFolderModal: false,
			folderIds: [],
			activeFoder: null,
			activeClass: null,
			activeStudent: null,
			activeAssignment: null,
			assignmentTypes,

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
