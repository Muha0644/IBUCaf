import type { NextApiRequest, NextApiResponse } from 'next'
import menu from '../../../public/menu.json' assert {type: 'json'}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
	const rid:Number = Number(req.query.id)
	const menuResp = menu.menu.find(each => each.id==rid)
	if(menuResp == undefined){
		res.status(404).json({menuItem: `Food with id ${rid} not fond`})
	} else 
	res.status(200).json(menuResp)
}
