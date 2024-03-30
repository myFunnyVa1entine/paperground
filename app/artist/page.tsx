import Image from 'next/image';
import Frame from '../components/frame';
import Link from 'next/link';

export interface ImagesInfoProps {
	id: number;
	kor_name:string;
	eng_name: string;
	description?: {
		Kor: string;
		Eng: string;
	}
	size: {
		w: number
		h: number
	}
}

export const IMAGES_INFO = [
	{ id: 1, kor_name: '하이다나', eng_name: 'haydonna', size: { w: 860, h: 644 }},
	{
		id: 2, kor_name: '지민희', eng_name: 'miny-ji' , size: { w: 860, h: 895 }, description: {
			Kor: '1982년 대한민국 진주 출생으로 스페인 카스테욘 데 라 플라나에서 살며 작업하다가 2023년 말 귀국하였다. 입체와 평면, 글쓰기와 비디오 등 다양한 매체를 넘나들며 자전적인 내용을 바탕으로 작업한다. 대표적인 작품으로는 수집한 죽은 식물과 사물을 코팅하고 채색해 미라화시켜 공중에 매단 큰 모빌 시리즈이다. 2023년 사진 작업 <가벼운 숨결>은 그 모빌의 다양한 사진을 수백개의 레이어로 만든 뒤 콜라주해 만든 것으로 숨결처럼 가벼워져 새로워지는 죽음에 대한 이야기를 담고 있다. 독서를 통한 텍스트에 감응해 글을 쓰기 시작하듯이 지민희는 주어진 환경에 반응해 생산하는 장소특정적인 작업을 즐겨서 한다. ',
			Eng: 'Miny Ji was born in Jinju, South Korea in 1982. She lived and worked in Castellón de la Plana, Spain and returned to Korea at the end of 2023. She creates installations that combine sculpture, video, text, and performance. She often makes suspended sculpture mixed of mummified and painted natural and artificial element. It creates a sense of weightless and luminosity and redfines space poetically. Also her representative work is painted cut metal works. She made cobweb-like form collaged organisms and illustrative characters metaphorize the phenomenon of reading. She covered a gallery floor with wooden flooring that carved with her written text. Like the performer, the audience walked over the installation to read. In 2010, Miny Ji published her essay, The wind says, it has been. In 2012, she completed permanent commission for International Finance Center Seoul.'
		}
	}, 
	{id : 3, kor_name: '김베리', eng_name: 'berry-kim', size: { w: 860, h: 860 }},
	{id : 4, kor_name: '채원석', eng_name: 'wonseock-chae', size: { w: 860, h: 1129 }},
	{id : 5, kor_name:'윤소이', eng_name: 'soi-yoon', size: { w: 860, h: 1147 }},
	{id : 6, kor_name:'단추-스튜디오', eng_name: 'danchu-studio', size: { w: 524, h: 721 }},
	{id : 7, kor_name:'반미수', eng_name: 'misoo-ban', size: { w: 860, h: 1042 }},
	{id : 8, kor_name:'안유리', eng_name: 'yuri-an', size: { w: 860, h: 480 }},
	{id : 9, kor_name:'이예주', eng_name: 'yejou-lee', size: { w: 860, h: 1146 }},
]

export default function Artist() {
	return <Frame>
		<section className='grid grid-cols-2 gap-1'>
			<article>
				{IMAGES_INFO.map((image:ImagesInfoProps) => <Link key={image.id} href={`/artist/${image.eng_name}`}><Image priority src={`/shop/image0${image.id}.jpg`} width={image.size.w} height={image.size.h} className='w-full h-auto align-middle hover:cursor-pointer' alt={`image 0${image.id}`}/>
				</Link>).filter((_,i)=> i < 4)
				}
			</article>
			<article>
				{IMAGES_INFO.map((image:ImagesInfoProps) => <Link key={image.id} href={`/artist/${image.eng_name}`}><Image priority key={image.id} src={`/shop/image0${image.id}.jpg`} width={image.size.w} height={image.size.h} className='w-full h-auto align-middle hover:cursor-pointer' alt={`image 0${image.id}`}/></Link>
				).filter((_,i)=> i > 4)}
			</article>
		</section>
	</Frame>;
}
