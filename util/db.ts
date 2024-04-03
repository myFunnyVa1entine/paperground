import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const DB_NAME = 'paper_ground';
const COLLECTION_NAME = 'artist_info';

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

export default async function ConnectDB() {
	try {
		await client.connect();
		const db = client.db(DB_NAME);
		const collection = db.collection(COLLECTION_NAME);
		return collection;
	} catch (err) {
		console.error(err);
	}
}
