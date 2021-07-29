import Database from '../../../db/config'
export default async function handler(req, res) {

  const db = await Database();
  const { id } = req.query
  const pet = await db.get(`select * from pets where id = ${id}`);
  return res.json(pet);

}