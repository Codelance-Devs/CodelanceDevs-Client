import { MongoClient } from 'mongodb';

const uri =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL!
		: process.env.DB_URL_DEV!;

let client: MongoClient;

async function connectDB(): Promise<MongoClient> {
	client = await MongoClient.connect(uri);
	console.log('✔️ Connected to Database.');
	return client;
}

export async function getClient(): Promise<MongoClient> {
	if (!client) {
		await connectDB();
	}
	return client;
}
