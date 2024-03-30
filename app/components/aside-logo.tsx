import Link from 'next/link';
import Image from 'next/image';

export default function AsideLogo() {
	return (
		<Link href='/' className='flex justify-center'>
			<Image
				priority
				src='/header_logo.jpg'
				width={200}
				height={85}
				alt='logo'
				className='w-auto h-auto sm:w-full sm:h-auto'
			/>
		</Link>
	);
}
