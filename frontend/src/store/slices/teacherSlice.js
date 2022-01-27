import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const FAKE_ASSIGNMENTS = [
	{
		id: uuid(),
		name: 'Есе',
		state: 'предадено',
	},
	{
		id: uuid(),
		name: 'Съчинение',
		state: 'предадено',
	},
	{
		id: uuid(),
		name: 'Тест',
		state: 'възложено',
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
					name: '12. "б" клас',
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
	},
});

export default teacherSlice.reducer;
