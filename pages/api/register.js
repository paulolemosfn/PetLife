import Database from '../../db/config'

export default async function handlerRegister(req, res) {

    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({
            message: 'É obrigatório informar e-mail, senha e confirmação da senha!'
        });
    };

    const db = await Database();
    const userExists = await db.get(`select * from users where email = "${email}"`);

    if (userExists) {
        return res.status(400).json({
            message: 'E-mail já cadastrado'
        });
    };

    if (confirmPassword !== password) {
        return res.status(400).json({
            message: 'As senhas estão diferentes'
        })
    }

    const result = await db.run(`insert into users(email, password) values ("${email}", "${password}")`);
    await db.close();
    if (result.changes === 0) {
        return res.status(500).json({
            message: 'Ocorreu um erro ao cadastrar o novo usuário'
        })
    }

    return res.status(201).json({ email });
}
