import database from '../../../database'
export default function handler(req, res) {

  return res.json(database.pets);

}