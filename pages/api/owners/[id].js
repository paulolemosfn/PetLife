import Database from '../../../db/config';
export default async function handler(req, res) {

    switch (req.method) {
        case 'PUT':
            return updateOwner(req, res);
        case 'GET':
            return getOwner(req, res);
        case 'DELETE':
            return deleteOwner(req, res);
    }

};

async function updateOwner(req, res) {
    const db = await Database();
    const { id } = req.query; //Pega o id o pet passado por parâmetro na URL
    const { name } = req.body; //Pega o name que foi passado no corpo da request

    if (!name) {
        return res.status(400).json({
            message: 'O nome do dono é obrigatório!'
        })
    }

    await db.run(`update owners set name = "${name}" where id = "${id}"`)
    return res.json({});
};

async function getOwner(req, res) {
    const db = await Database();
    const { id } = req.query;
    const owner = await db.get(`select * from owners where id = ${id}`)
    return res.json(owner)
}

async function deleteOwner(req, res) {
    const db = await Database();
    const { id } = req.query;
    const deletedOwner = await db.get(`delete from owners where id = ${id}`)
    return res.json(deletedOwner)
}
