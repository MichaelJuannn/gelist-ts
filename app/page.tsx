import { prisma } from '../lib/client';
import { Form } from './components/Form';

async function getEvent() {
	const eventResponse = await prisma.event.count();
	console.log(eventResponse);
}

export default function Home() {
	return (
		<>
			<div>
				<Form />
			</div>
		</>
	);
}
