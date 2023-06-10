'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button, ButtonLoading } from './ui/button';
export function Form() {
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [creator, setCreator] = useState('');
	const [date, setDate] = useState('');
	const [isLoading, setisLoading] = useState(false);

	async function submitForm(e: FormEvent) {
		setisLoading(true);
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
		<div className='m-3 max-w-lg mx-auto'>
			<div className=''>
				<Label htmlFor='title'>Title</Label>
				<Input
					type='text'
					id='title'
					placeholder='Title'
					onChange={(e) => setTitle(e.currentTarget.value)}
					className=''
				/>
			</div>
			<div>
				<Label htmlFor='creator'>Creator</Label>
				<Input
					type='text'
					id='creator'
					placeholder='Creator'
					onChange={(e) => setCreator(e.currentTarget.value)}
				/>
			</div>
			<div>
				<Label htmlFor='date'>Date</Label>
				<Input
					type='date'
					id='date'
					onChange={(e) => setDate(e.currentTarget.value)}
				/>
			</div>
			{isLoading ? (
				<ButtonLoading />
			) : (
				<Button className='bg-violet-700 max-w-fit mt-2' onClick={submitForm}>
					Submit
				</Button>
			)}
		</div>
	);
}
