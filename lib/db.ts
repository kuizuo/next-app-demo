import sqlite from 'sqlite3'

import path from 'path'

const pathToDb = path.join(process.cwd(), 'database')
const db = new sqlite.Database(`${pathToDb}/db.sqlite`, () => {
  // db.run('create table post(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(15), content TEXT(2000))', (err) => {
  //   if (err) {
  //     console.log(err)
  //   }
  // })
})

export default db
