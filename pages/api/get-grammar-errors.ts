import query from '@/utils/query';
import { NextApiRequest, NextApiResponse } from 'next';

export type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'Please add some text...' });
  }

  // prompt transformation
  const question = `How many grammar mistakes exists in quoted text "${prompt}"
  
  Respond in JSON format: {"Errors": *number of mistakes*, "Words": [*words that contains mistake*]}`;

  const response = await query(question);
  const answer = JSON.parse(
    response?.replaceAll('\n', '').trim().toLowerCase()!
  );

  res.status(200).json({ answer });
}
