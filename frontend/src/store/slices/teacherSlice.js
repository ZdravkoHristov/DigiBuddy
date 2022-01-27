import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

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
					students: [
						{
							id: uuid(),
							name: 'Атанас Бозов',
							doneAssignments: 2,
							totalAssignments: 10,
						},
						{
							id: uuid(),
							name: 'Весела Данаджиева',
							doneAssignments: 5,
							totalAssignments: 10,
						},
						{
							id: uuid(),
							name: 'Владимир Костадинов',
							doneAssignments: 2,
							totalAssignments: 10,
						},
						{
							id: uuid(),
							name: 'Владимир Страхилов',
							doneAssignments: 2,
							totalAssignments: 10,
						},
					],
				},
				{
					id: uuid(),
					name: '12. "б" клас',
					students: [
						{
							id: uuid(),
							name: 'Атанас Бозов',
							doneAssignments: 2,
							totalAssignments: 10,
						},
						{
							id: uuid(),
							name: 'Весела Данаджиева',
							doneAssignments: 5,
							totalAssignments: 10,
						},
						{
							id: uuid(),
							name: 'Владимир Костадинов',
							doneAssignments: 2,
							totalAssignments: 10,
						},
						{
							id: uuid(),
							name: 'Владимир Страхилов',
							doneAssignments: 2,
							totalAssignments: 10,
						},
					],
				},
			],
			students: [],
			activeAssignments: [],
		},
	},
});

export default teacherSlice.reducer;
