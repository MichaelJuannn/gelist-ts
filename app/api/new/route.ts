import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/client';
import { randomBytes } from 'crypto';

export async function POST(request: NextRequest) {
	const data = await request.json();
	const slug = randomBytes(10).toString('hex');
	try {
		const event = await prisma.event.create({
			data: {
				slug: slug,
				title: data.title,
				creator: data.creator,
			},
		});
		return NextResponse.json({ slug: slug });
	} catch (error) {
		console.log(error);
		return new NextResponse('eror');
	}
}
