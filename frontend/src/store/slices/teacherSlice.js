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

const FAKE_COLLECTIONS = [
	{
		id: uuid(),
		name: 'Задания 12. клас',
		files: [],
		children: [
			{
				id: uuid(),
				name: '12а',
				files: [
					{
						id: uuid(),
						name: 'Контролна работа №1',
					},
					{
						id: uuid(),
						name: 'Контролна работа №2',
					},
				],
				children: [
					{
						id: uuid(),
						name: '1 група',
						files: [
							{
								id: uuid(),
								name: 'Тест',
							},
						],
						children: [
							{
								id: uuid(),
								name: 'папка',
								files: [
									{
										id: uuid(),
										name: 'fail',
									},
								],
								children: [],
							},
						],
					},
				],
			},
			{
				id: uuid(),
				name: '12б',
				files: [
					{
						id: uuid(),
						name: 'Контролна работа №1',
					},
				],
				children: [],
			},
		],
	},
	{
		id: uuid(),
		name: 'Задания 11. клас',
		files: [
			{
				id: uuid(),
				name: 'Контролна работа №1',
			},
		],
		children: [],
	},
	{
		id: uuid(),
		name: 'Задания 10. клас',
		files: [
			{
				id: uuid(),
				name: 'Контролна работа №1',
			},
		],
		children: [],
	},
	{
		id: uuid(),
		name: 'Задания 9. клас',
		files: [],
		children: [],
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
			assignments: [
				{
					id: uuid(),
					name: 'През коя година...',
					type: 'selectAnswer',
					answers: [
						{ id: uuid(), value: '681', isCorrect: false },
						{ id: uuid(), value: '865', isCorrect: true },
						{ id: uuid(), value: '311', isCorrect: false },
						{ id: uuid(), value: '2017', isCorrect: false },
					],
				},
			],
			collections: [...FAKE_COLLECTIONS],
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
	},
});

export default teacherSlice.reducer;
