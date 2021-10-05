// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const ofensas = require('./ofensas.json');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{frase: string}>,
) {
  res.status(200).json({frase: ofensas[randomIndex()]});
}

const randomIndex = () => Math.floor(Math.random() * ofensas.length);
