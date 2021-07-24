export default function handler(req, res) {

  const { database } = require('../../database');

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'E-mail e senha são obrigatórios!'
    });
  }

  // if (email !== "admin@petlife.com" || password !== "123456") {
  //   return res.status(401).json({
  //     message: 'E-mail e/ou senha são inválidos!'
  //   });
  // }

  return res.status(200).json(database);

}