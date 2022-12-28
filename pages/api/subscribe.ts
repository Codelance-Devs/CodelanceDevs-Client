import type { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from '../../utils/db';

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
		const client = await getClient();
	} catch (error) {}
};
