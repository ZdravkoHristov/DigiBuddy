import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const FAKE_ASSIGNMENTS = [
	{
		id: uuid(),
		name: 'Есе',
		state: 'предадено',
		files: [
			{
				id: uuid(),
				name: 'Есе-1.docx',
			},
		],
	},
	{
		id: uuid(),
		name: 'Съчинение',
		state: 'предадено',
		files: [
			{
				id: uuid(),
				name: 'Съчиниение.docx',
			},
			{
				id: uuid(),
				name: 'Чернова.docs',
			},
		],
	},
	{
		id: uuid(),
		name: 'Тест',
		state: 'възложено',
		files: [
			{
				id: uuid(),
				name: 'Отговори.docx',
			},
		],
	},
];

const FAKE_STUDENTS = [
	{
		id: uuid(),
		number: 1,
		fullName: 'Атанас Бозов',
		doneAssignments: 2,
		totalAssignments: 10,
		assignments: FAKE_ASSIGNMENTS,
	},
	{
		id: uuid(),
		number: 2,
		fullName: 'Весела Данаджиева',
		doneAssignments: 5,
		totalAssignments: 10,
		assignments: FAKE_ASSIGNMENTS,
	},
	{
		id: uuid(),
		number: 3,
		fullName: 'Владимир Костадинов',
		doneAssignments: 2,
		totalAssignments: 10,
		assignments: FAKE_ASSIGNMENTS,
	},
	{
		id: uuid(),
		number: 4,
		fullName: 'Владимир Страхилов',
		doneAssignments: 2,
		totalAssignments: 10,
		assignments: FAKE_ASSIGNMENTS,
	},
];

const teacherSlice = createSlice({
	name: 'teacher',
	initialState: {
		info: {
			name: 'Здравко',
			surname: 'Христов',
			fullName: 'Здравко Христов',
			email: 'zdravko.hristov@sou-zlatarov.org',
			school: 'СУ "Проф. д-р Асен Златаров"',
			city: 'Първомай',
			region: 'Пловдив',
			role: 'Учител',
			subject: 'информационни технологии',
			collections: [],
			classes: [
				{
					id: uuid(),
					name: '12. "a" клас',
					students: FAKE_STUDENTS,
				},
				{
					id: uuid(),
					name: '12. "б" клас',
					students: FAKE_STUDENTS,
				},
			],
			students: FAKE_STUDENTS,
			activeAssignments: [],
		},
		uiInfo: {
			showStudentInfo: false,
			showAssignmentInfo: false,
			activeClassId: null,
			activeStudentId: null,
			activeAssignmentId: null,
		},
	},

	reducers: {
		setUiInfo: (state, { payload }) => {
			state.uiInfo = { ...state.uiInfo, ...payload };
		},
	},
});

export default teacherSlice.reducer;

export const { setUiInfo } = teacherSlice.actions;
