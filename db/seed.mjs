import db from './index'

db.db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
  )`, (err) => {
  console.log(err || 'Table users created')
});

db.close();