export default function handlerRegister(req, res) {

    const { database } = require('../../database');

    const { email, password, confirmPassword } = req.body;

    const userExists = database.find(eachUser => eachUser.email === email);

    if (userExists) {
        return res.status(400).json({
            message: 'E-mail já cadastrado'
        });
    };

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({
            message: 'É obrigatório informa e-mail, senha e confirmação da senha!'
        });
    };

    if (confirmPassword !== password) {
        return res.status(400).json({
            message: 'As senhas estão diferentes'
        })
    }

    const newUser = {
        email,
        password
    };

    database.push(newUser);

    delete newUser.password; // remove password from newUser

    return res.status(201).json(newUser);
}
