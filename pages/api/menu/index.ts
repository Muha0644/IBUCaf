import type { NextApiRequest, NextApiResponse } from 'next'
import menu from '../../../public/menu.json' assert {type: 'json'}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Object>>
) {
  res.status(200).json(menu.menu)
}
