import Link from 'next/link';
import AsideLogo from './aside-logo';
import Image from 'next/image';

export default function Aside() {
	const INSTA = 'https://www.instagram.com/paperground.kr/';
	const STORE =
		'https://smartstore.naver.com/paperground/?NaPm=ct%3Dlu5jxed9%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3D29b4ca1e1bbfd3ce1f744c6f8e8d4766facc7ac2';

	return (
		<aside className='p-4'>
			<section>
				<AsideLogo />
			</section>
			<ul className='flex justify-between items-center sm:flex-col sm:items-start py-2 sm:mt-4'>
				<li>
					<Link href='/about' className='hover:text-purple-300 transition-all'>
						ABOUT
					</Link>
				</li>
				<li>
					<Link href='/artist' className='hover:text-purple-300 transition-all'>
						ARTIST
					</Link>
				</li>
				<li>
					<Link
						href={STORE}
						className='hover:text-purple-300 transition-all'
						target='_blank'>
						STORE
					</Link>
				</li>
				<li>
					<Link href='/join' className='hover:text-purple-300 transition-all'>
						JOIN
					</Link>
				</li>
				<li className='sm:-ml-1 sm:pt-2'>
					<Link
						href={INSTA}
						className='hover:text-purple-300 transition-all'
						target='_blank'>
						<Image priority src='/insta.svg' width={26} height={26} className='w-auto h-[18px]' alt='insta logo' />
					</Link>
				</li>
			</ul>
		</aside>
	);
}
