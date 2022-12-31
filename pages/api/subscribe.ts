import type { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from '../../utils/db';
import { sendSubscribedEmail } from '../../utils/mail';

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST':
			await subscribe(req, res);
			break;
	}
};

export default requestHandler;

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { email, name } = req.body;
		const db = (await getClient()).db('CodelanceDevsSubscribe');
		const subscribers = db.collection('subscribers');
		const subscribed = await subscribers.findOne({ email });
		if (!subscribed) {
			const document = {
				email,
				name,
			};
			await subscribers.insertOne(document);
			sendSubscribedEmail(document);
			return res
				.status(201)
				.json({ ...document, message: 'app/new-subscriber-added' });
		} else throw new Error('app/already-subscribed');
	} catch (error) {
		if (error instanceof Error) {
			return res.status(400).json({ message: error.message });
		}
	}
};
