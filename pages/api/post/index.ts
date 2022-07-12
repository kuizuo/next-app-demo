import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        db.all(`select * from post`, (err, rows) => {
          res.status(200).json(rows)
        })
        break
      case 'POST':
        const { title, content } = req.body

        db.get(`insert into post(title, content) values(?, ?)`, [title, content], (err, rows) => {
          res.status(200).json(rows)
        })
        break
    }
  } catch (error) {
    res.status(500).end()
  }
}
