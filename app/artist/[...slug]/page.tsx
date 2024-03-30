import Image from "next/image";
import { IMAGES_INFO, ImagesInfoProps } from '../../artist/page'

export default function Artists({ params }: { params: { slug: string } }) {
	const pathname = String(params.slug[0]);
	const artist_page = IMAGES_INFO.filter((i: ImagesInfoProps) => i.eng_name === pathname)
	
	return <section className="p-2">
		{artist_page.map((artist: ImagesInfoProps) => <article key={artist.id} className="flex flex-col justify-center items-center gap-2 p-4">
			<h1 className="uppercase">{artist.kor_name}({artist.eng_name})</h1>
			<Image src={`/shop/image0${artist.id}.jpg`} width={artist.size.w} height={artist.size.h} className="w-full h-auto" alt='artist image' />
			<blockquote className="p-4 mt-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 text-sm">
				{artist.description?.Kor}
				<br/>
				<br/>
				{artist.description?.Eng}
			</blockquote>
			<hr className="border border-zinc-200 w-full my-6" />
		</article>)}


	</section>;
}


function ArtistPortfolios() {
	const dummies = [
		{name: 'item 01'},
		{name: 'item 02'},
		{name: 'item 03'},
		{name: 'item 04'},
		{name: 'item 05'},
	]
	return <section className="relative overflow-hidden">
		{dummies.map(dummy => <div key={dummy.name} className="bg-black text-white flex">
			{dummy.name}
		</div>)}
		123
	</section>
}
