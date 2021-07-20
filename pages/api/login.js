export default function handler(req, res) {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'E-mail e senha são obrigatórios!'
    });
  }

  return res.status(200).json({ message: "Ok!" });

}