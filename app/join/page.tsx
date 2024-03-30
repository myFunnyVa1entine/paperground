import Frame from '../components/frame';
import Link from 'next/link';
import Image from 'next/image';

export default function Join() {
	return <Frame>
		<section className='flex flex-col items-center p-2'>
			<dl className='flex flex-col items-center w-full'>
				<dt className='sm:text-2xl bg-fuchsia-200 w-full mt-1 py-10 text-center text-stone-700'>작가 모집중 <span className='text-red-700'>hot 🔥</span></dt>
				<dd className='my-4'>
					<Link href="https://forms.gle/RP4keXphKTdTvBvu6" target='_blank'>
						<Image src='/join_button.jpg' width={110} height={110} alt='join button' className='h-auto w-20'/>
					</Link>
				</dd>
			</dl>
			<dl className='flex flex-col items-center text-xs sm:text-sm mt-2 mb-4'>
				<dd>한국 순수 미술계의 <span className='text-red-700'>새</span><span className='text-yellow-500'>로</span><span className='text-blue-700'>운</span> 판로를 만들어 갈</dd>
				<dd>판로를 만들어 갈 페이퍼 그라운드에서</dd>
				<dd>함께 뛰어놀 아티스트를 찾고 있습니다.</dd>
				
				<dd className='mt-4'>내가 좀 미술이다!</dd>
				<dd className='mb-4'>내가 좀 아트다!</dd>
				<dd>생각하시는 작가님들께서는 </dd>
				<dd>포트폴리오나 인스타, 웹페이지와 함께</dd>
				<dd>편하게 문의주세요.</dd>
				<dd>기다리고 있습니다. 😊</dd>
			</dl>
			<Image src='/join_image.jpg' width={497} height={687} alt='join image' className='w-auto h-auto' />
			<footer className='text-[8px] sm:text-xs mt-8'>
				copyright &copy; by paperground. All Right Reserved.
			</footer>
		</section>
	</Frame>;
}
