'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
export function Form() {
	const router = useRouter();
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
		const response = await data.json();
		router.push(response.slug);
	}
	return (
		<div className='flex flex-col items-center'>
			<div>
				<label htmlFor='title' className='block'>
					Title
				</label>
				<input
					type='text'
					id='title'
					placeholder='Title'
					onChange={(e) => setTitle(e.currentTarget.value)}
					className=''
				/>
			</div>
			<div>
				<label htmlFor='creator' className='block'>
					Creator
				</label>
				<input
					type='text'
					id='creator'
					placeholder='Creator'
					onChange={(e) => setCreator(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label htmlFor='date' className='block'>
					Date
				</label>
				<input
					type='date'
					id='date'
					onChange={(e) => setDate(e.currentTarget.value)}
				/>
			</div>
			<button
				className='bg-violet-700 p-3 rounded max-w-fit'
				onClick={submitForm}
			>
				Submit
			</button>
		</div>
	);
}
