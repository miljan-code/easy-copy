import query from '@/utils/query';
import { NextApiRequest, NextApiResponse } from 'next';

export type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ response: 'Please add some text...' });
  }

  const question = `Write an article about "${prompt}"`;
  const answer = (await query(question)) || 'Something went wrong...';

  const response = answer.slice(2);

  res.status(200).json({ response });
}
