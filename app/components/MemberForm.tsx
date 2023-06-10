'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button, ButtonLoading } from './ui/button';

export function MemberForm({ eventId }: any) {
	const [name, setName] = useState('');
	const [isLoading, setisLoading] = useState(false);

	async function submitMember() {
		setisLoading(true);
		const response = await fetch('api/member', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: name, eventId: eventId }),
		});
		location.reload();
	}
	return (
		<>
			<form>
				<div>
					<Input
						type='text'
						placeholder='New Member'
						onChange={(e) => setName(e.currentTarget.value)}
						className='w-56'
					/>
				</div>
				{isLoading ? (
					<div className='mt-2'>
						<ButtonLoading />
					</div>
				) : (
					<Button
						type='submit'
						onClick={submitMember}
						className='bg-violet-700 mt-2'
					>
						ADD
					</Button>
				)}
			</form>
		</>
	);
}
