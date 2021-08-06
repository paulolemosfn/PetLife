import Database from '../../../db/config'

export default async function handler(req, res){

    switch (req.method) {
        case 'POST':            
            return create(req, res);
        case 'GET':
            return list(req, res);            
    }

}

async function list(req, res){
    const db = await Database();

    const owners = await db.all(`select * from owners`);
  
    return res.json(owners);
}

async function create(req, res){
    const db = await Database();
    const { ownerName } = req.body;
  
    if (!ownerName) {
      return res.status(400).json({
        message: 'O nome do dono é obrigatório!'
      })
    }
  
    const result = await db.run(`insert into owners(name) values ("${ownerName}")`);
    await db.close();
    if (result.changes === 0) {
      return res.status(500).json({
        message: 'Ocorreu um erro ao cadastrar o novo dono'
      })
    };
  
    return res.status(201).json({ ownerName });   
}