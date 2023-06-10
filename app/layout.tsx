import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Gelist',
	description: 'Gelist for ants',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-gradient-to-br from-slate-200 to-zinc-200 min-h-screen overflow-hidden`}
			>
				<h1 className='text-7xl text-center text-transparent bg-clip-text uppercase bg-gradient-to-tr from-violet-800 to-black '>
					<Link href={'/'}>gelist</Link>
				</h1>
				{children}
			</body>
		</html>
	);
}
