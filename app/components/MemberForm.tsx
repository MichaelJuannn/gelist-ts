'use client';

import { useState } from 'react';

export function MemberForm({ eventId }: any) {
	const [name, setName] = useState('');

	async function submitMember() {
		const response = await fetch('api/member', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: name, eventId: eventId }),
		});
	}
	return (
		<>
			<h1 className='text-red-700'>{eventId}</h1>
			<div>
				<label htmlFor='member'>Member</label>
				<input
					type='text'
					onChange={(e) => setName(e.currentTarget.value)}
					className='border-2 border-purple-600'
				/>
			</div>
			<button onClick={submitMember} className='bg-purple-600 p-3 rounded'>
				ADD
			</button>
		</>
	);
}
