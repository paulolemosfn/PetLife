export default function handler(req, res) {

  const { database } = require('../../database');

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'E-mail e senha são obrigatórios!'
    });
  }

  const userExists = database.find(eachUser => eachUser.email === email);

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