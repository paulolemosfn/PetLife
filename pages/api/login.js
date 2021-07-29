import Database from '../../db/config'
export default async function handler(req, res) {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'E-mail e senha são obrigatórios!'
    });
  }

  const db = await Database();
  const userExists = await db.get(`select * from users where email = '${email}'`);
  await db.close();

  if (!userExists) {
    return res.status(401).json({
      message: 'Não exite e-mail e/ou senha cadastrados!'
    });
  }

  if (userExists.password !== password) {
    return res.status(401).json({
      message: 'E-mail e/ou senha inválidos!'
    });
  }

  return res.send('');

}