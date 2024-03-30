import Frame from '../components/frame';
import Image from 'next/image';

export default function About() {
	return (
		<Frame>
			<article className='flex justify-center mt-6'>
				<Image
					src='/join_image.jpg'
					priority
					width={497}
					height={687}
					className='w-auto h-auto '
					alt='image'
				/>
			</article>
			<dl className='pt-8 grid grid-rows-2 my-8'>
				<div>
					<dt>PAPER GROUND</dt>
					<dd className='text-sm'>페이퍼그라운드는 유니크한 시선으로</dd>
					<dd className='text-sm'>자신만의 작업 세계를 일궈가는 아티스트들,</dd>
					<dd className='text-sm'>그리고 이들의 시선과 작품에 공감하는</dd>
					<dd className='text-sm'>
						콜렉터들을 위한 즐거운 놀이터이자 연결의 플랫폼입니다.
					</dd>
				</div>
				<div className='my-8'>
					<dt>아티스트 신청 및 문의</dt>
					<dd className='text-sm'>paperground.kr@gmail.com</dd>
					<dd className='text-sm'>이메일로 작업물을 볼 수 있는</dd>
					<dd className='text-sm'>
						포트폴리오나 웹페이지, sns주소 등을 보내주세요.
					</dd>
					<dd className='text-sm'>확인 후 연락드립니다.</dd>
				</div>
			</dl>
		</Frame>
	);
}
