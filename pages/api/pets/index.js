import Database from '../../../db/config'
export default async function handlerCreate(req, res) {

  switch (req.method) {
    case 'POST':
      return create(req, res);
    case 'GET':
      return list(req, res);
  }

}

async function list(req, res) {
  const db = await Database();

  const pets = await db.all(`select * from pets`);

  return res.json(pets);

}

async function create(req, res) {
  const db = await Database();
  const { namePet } = req.body;

  if (!namePet) {
    return res.status(400).json({
      message: 'O nome do pet é obrigatório!'
    })
  }

  const result = await db.run(`insert into pets(name) values ("${namePet}")`);
  await db.close();
  if (result.changes === 0) {
    return res.status(500).json({
      message: 'Ocorreu um erro ao cadastrar o novo usuário'
    })
  };

  return res.status(201).json({ namePet });

}