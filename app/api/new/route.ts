import { NextResponse } from 'next/server';
import { prisma } from '@/app/utils/client';
import { randomBytes } from 'crypto';

export async function POST(request: Request) {
	const data = await request.json();
	try {
		const event = await prisma.event.create({
			data: {
				slug: randomBytes(10).toString('hex'),
				title: data.title,
				creator: data.creator,
			},
		});
		console.log(data);
		return new NextResponse(data);
	} catch (error) {}
}
