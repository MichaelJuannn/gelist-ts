'use client';

import { FormEvent, useState } from 'react';
export function Form() {
	const [title, setTitle] = useState('');
	const [creator, setCreator] = useState('');
	const [date, setDate] = useState('');

	async function submitForm(e: FormEvent) {
		const data = await fetch('/api/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: title, creator: creator, date: date }),
		});
		e.preventDefault();
	}
	return (
		<div>
			<div>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					placeholder='Title'
					onChange={(e) => setTitle(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label htmlFor='creator'>Creator</label>
				<input
					type='text'
					id='creator'
					placeholder='Creator'
					onChange={(e) => setCreator(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label htmlFor='date'>Date</label>
				<input
					type='date'
					id='date'
					onChange={(e) => setDate(e.currentTarget.value)}
				/>
			</div>
			<button className='bg-purple-700 p-2 rounded' onClick={submitForm}>
				Submit
			</button>
		</div>
	);
}
