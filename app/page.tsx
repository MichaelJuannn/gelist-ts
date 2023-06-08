import { prisma } from './utils/client';

async function getEvent() {
	const eventResponse = await prisma.event.count();
	console.log(eventResponse);
}

export default function Home() {
	getEvent();
	return <>Hello</>;
}
