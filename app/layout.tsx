import type { Metadata } from "next";
import './globals.css';
import localFont from 'next/font/local';
import Aside from './components/aside';

const gosha = localFont({
	src: [
		{
			path: '../public/fonts/PPGoshaSans-Regular.otf',
			weight: 'normal',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = {
	title: 'PAPERGROUND 페이퍼그라운드',
	description: '모험하는 아티스트와 콜렉터들의 놀이터',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${gosha.className}`}>
				<section className=" grid grid-rows-[88px_1fr] sm:grid-cols-[200px_1fr] h-screen">
				<HeaderContent />
				{children}
				</section>
			</body>
		</html>
	);
}

function HeaderContent() {
	return (
		<header>
			<Aside />
		</header>
	);
}
