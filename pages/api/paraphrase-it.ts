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
  const { prompt, style } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'Please add some text...' });
  }

  // prompt transformation
  const question = `Paraphrase quoted text in ${style} style "${prompt}"`;

  const response = (await query(question)) || '';
  const answer = response.replaceAll('\n', '').replaceAll('"', '');

  res.status(200).json({ answer });
}
