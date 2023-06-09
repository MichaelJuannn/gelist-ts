import { prisma } from '@/app/utils/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const member = await prisma.member.create({
		data: {
			name: data.name,
			eventsId: data.eventId,
		},
	});
	return NextResponse.json(member);
}
