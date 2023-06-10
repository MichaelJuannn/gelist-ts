import { prisma } from '@/lib/client';
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
			<div className='p-2 flex flex-col items-center justify-start'>
				<div className='border border-violet-950 rounded p-5 md:w-1/2 '>
					<div className='text-3xl text-violet-900 font-bold '>
						{event?.title} by {event?.creator} 📃
					</div>
					{event?.member.map((member) => {
						return <Member name={member.name} />;
					})}
					<MemberForm eventId={event?.id} />
				</div>
			</div>
		</>
	);
}

function Member({ name }: any) {
	return <div className='text-md m-1 capitalize'>{name}</div>;
}
