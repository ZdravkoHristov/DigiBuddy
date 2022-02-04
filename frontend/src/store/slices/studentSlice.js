import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const FAKE_ASSIGNMENTS = [
	{
		id: uuid(),

		name: 'Есе',
		state: 'предадено',
		deadline: '12.03.2022',
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
		deadline: '12.03.2022',
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
		deadline: '12.03.2022',
		files: [
			{
				id: uuid(),
				name: 'Отговори.docx',
			},
		],
	},
];

const studentSlice = createSlice({
	name: 'student',
	initialState: {
		info: {
			number: 12,
			name: 'Здравко',
			surname: 'Христов',
			fullName: 'Здравко Христов',
			email: 'zdravko.hristov@sou-zlatarov.org',
			school: 'СУ "Проф. д-р Асен Златаров"',
			city: 'Първомай',
			region: 'Пловдив',
			role: 'Ученик',
			grade: '12 б клас',
			assignments: [...FAKE_ASSIGNMENTS],

			classes: [
				{
					id: uuid(),
					name: '12. "б" клас - ИТ',
					teacher: 'Татяна Попова',
					assignments: [...FAKE_ASSIGNMENTS],
				},
				{
					id: uuid(),
					name: '12. "б" клас - Информатика',
					teacher: 'Иванка Кертикова',
					assignments: [...FAKE_ASSIGNMENTS],
				},
			],
		},
	},
});

export default studentSlice.reducer;
