import { prisma } from '@/app/utils/client';
import { MemberForm } from '@/app/components/MemberForm';

async function getEvent(slug: string) {
	const data = await prisma.event.findFirst({
		where: {
			slug: slug,
		},
		include: { member: true },
	});
	return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
	const event = await getEvent(params.slug);
	console.log(event);
	return (
		<>
			<div>{event?.id}</div>
			<div>{event?.slug}</div>
			<div>{event?.title}</div>
			<div>{event?.date}</div>
			<div>{event?.creator}</div>
			<MemberForm eventId={event?.id} />
		</>
	);
}
