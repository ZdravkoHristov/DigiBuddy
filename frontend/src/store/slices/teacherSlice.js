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

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(ids);

const FAKE_COLLECTIONS = [
	{
		id: ids[0],
		name: 'Задания 12. клас',
		files: [],
		children: [
			{
				parentId: ids[0],
				id: ids[1],
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
						parentId: ids[1],
						id: ids[2],
						name: '1 група',
						files: [
							{
								id: uuid(),
								name: 'Тест',
							},
						],
						children: [
							{
								parentId: ids[2],
								id: ids[3],
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
					{
						parentId: ids[1],
						id: 11,
						name: '2 grupa',
						files: [],
						children: [],
					},
				],
			},
			{
				parentId: ids[0],
				id: ids[4],
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
		id: ids[5],
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
		id: ids[6],
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
		id: ids[7],
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
			email: 'zdravko.hristov@sou-zlatarov.org',
			school: 'СУ "Проф. д-р Асен Златаров"',
			city: 'Първомай',
			region: 'Пловдив',
			role: 'Учител',
			subject: 'информационни технологии',
			assignments: [
				/** ASSIGNMENTS TABLE |  TYPES TABLE    | ANSWERS TABLE
				 * ex_id 			  |		id			| id
				 * teacher_id		  |		ex_id		| ex_id
				 * type				  |		type_name	| answer
				 * name				  |					| is_answer
				 * question			  |					|
				 * 					  |					|
				 * 	suzdava se edna po edna zadacha one to one zadacha svurzana s uchitelq
				 * tazi zadacha moje da bude samo edin tip one to one s types no moje da ima bezkrai otgovori
				 * has many otgovori
				 */
				{
					id: uuid(),
					name: 'През коя година...',
					question: 'Питам през коя година...',
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
			customAssignmentData: null,
		},
	},
	reducers: {
		setTeacher: (state, { payload }) => {
			// console.log('payload');
			// console.log(payload);
			state.info = { ...state.info, ...payload };
		},
	},
});

export const { setTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
