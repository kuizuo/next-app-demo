import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const { title, content } = req.body

  try {
    switch (req.method) {
      case 'GET':
        db.get(`select * from post where id=$id`, { $id: id }, (err, rows) => {
          res.status(200).json(rows)
        })
        break
      case 'Put':
        db.get(`update post set title=?,content=? where id=?`, [title, content, id], (err, rows) => {
          res.status(200).json(rows)
        })
        break
      case 'DELETE':
        db.get(`delete from post where id=$id`, { $id: id }, (err, rows) => {
          res.status(200).json(rows)
        })
        break
    }
  } catch (error) {
    res.status(500).end()
  }
}
