import Database from '../../../db/config'
export default async function handler(req, res) {

  switch (req.method) {
    case 'PUT':
      return updatePet(req, res);
    case 'GET':
      return getPet(req, res);
  }

}

async function updatePet(req, res) {
  const db = await Database();
  const { id } = req.query;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: 'O nome do pet é obrigatório!'
    })
  }

  await db.run(`update pets set name = "${name}" where id = ${id}`);
  return res.json({});
}

async function getPet(req, res) {
  const db = await Database();
  const { id } = req.query
  const pet = await db.get(`select * from pets where id = ${id}`);
  return res.json(pet);
}