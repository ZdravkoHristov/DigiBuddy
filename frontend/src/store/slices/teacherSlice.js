import { createSlice } from '@reduxjs/toolkit';

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
			classes: [],
			students: [],
			activeAssignments: [],
		},
	},
});

export default teacherSlice.reducer;
