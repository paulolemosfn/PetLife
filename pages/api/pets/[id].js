import Database from '../../../db/config'
export default async function handler(req, res) {

  //Verifica qual o método HTTP foi utilizado
  switch (req.method) {
    case 'PUT':
      return updatePet(req, res);
    case 'GET':
      return getPet(req, res);
  }

}

async function updatePet(req, res) {
  const db = await Database();
  const { id } = req.query; //Pega o id o pet passado por parâmetro na URL
  const { name } = req.body; //Pega o name que foi passado no corpo da request

  if (!name) {
    return res.status(400).json({
      message: 'O nome do pet é obrigatório!'
    })
  }

  //Atualiza o nome do pet no banco de dados pelo id 
  await db.run(`update pets set name = "${name}" where id = ${id}`);
  return res.json({});
}

async function getPet(req, res) {
  const db = await Database();
  const { id } = req.query
  const pet = await db.get(`select * from pets where id = ${id}`);
  return res.json(pet);
}