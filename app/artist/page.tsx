import Link from 'next/link';
import Image from 'next/image';
import Frame from '../components/frame';
import ConnectDB from '@/util/db';

export default async function Artist() {
	const db = await ConnectDB();
	const ARTISTS_DATAS = await db?.find().toArray();

	return <Frame>
			<section className='grid grid-cols-2 gap-1'>
				<article>
					{ARTISTS_DATAS?.map((image: any) => <Link key={image._id} href={`/artist/${image.eng_name}`}>
						<Image priority src={`/shop/${image.eng_name}/${image.image_info.name}.jpg`} width={image.image_info.size.w} height={image.image_info.size.h} className='w-full h-auto align-middle hover:cursor-pointer' alt={`image 0${image.id}`} />
					</Link>
					).filter((_,i)=> i < 4)}
				</article> 
				<article>
					{ARTISTS_DATAS?.map((image: any) => <Link key={image._id} href={`/artist/${image.eng_name}`}>
						<Image priority src={`/shop/${image.eng_name}/${image.image_info.name}.jpg`} width={image.image_info.size.w} height={image.image_info.size.h} className='w-full h-auto align-middle hover:cursor-pointer' alt={`image 0${image.id}`} />
					</Link>
					).filter((_,i)=> i > 4)}
				</article> 
			</section>
	</Frame>;
}
