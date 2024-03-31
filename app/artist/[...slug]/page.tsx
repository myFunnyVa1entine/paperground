import Image from "next/image";
import ConnectDB from '@/util/db';

export default async function Artists({ params }: { params: { slug: string } }) {
	const pathname = String(params.slug[0]);
	
	const db = await ConnectDB();
	const ARTISTS_DATAS = await db?.find().toArray();
	const artist_page = ARTISTS_DATAS?.filter((i: any) => i.eng_name === pathname)

	
	return <section className="p-2">
		{artist_page?.map((artist: any) => (
			<article key={artist._id} className="flex flex-col justify-center items-center gap-2 p-4">
				<h1 className="uppercase">{artist.kor_name}( {artist.eng_name} )</h1>

				<Image src={`/shop/${artist.eng_name}/${artist.image_info.name}.jpg`} width={artist.image_info.size.w} height={artist.image_info.size.h} className="w-full h-auto" alt='artist image' />

				<blockquote className="p-4 mt-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 text-sm">
				{artist.description?.Kor}
				<br/>
				<br/>
				{artist.description?.Eng}
				</blockquote>
				
				<hr className="border border-zinc-200 w-full my-6" />
			</article>
		))}
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
