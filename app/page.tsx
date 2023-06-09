import { prisma } from './utils/client';
import { Form } from './components/Form';

async function getEvent() {
	const eventResponse = await prisma.event.count();
	console.log(eventResponse);
}

export default function Home() {
	getEvent();
	return (
		<>
			<div>
				<Form />
			</div>
		</>
	);
}
