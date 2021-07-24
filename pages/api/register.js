import database from '../../database'

export default function handlerRegister(req, res) {
    const { email, password, confirmPassword } = req.body;

    // if (email === "adminID@petlife.com") {
    //     return res.status(401).json({
    //         message: 'E-mail já cadastrado'
    //     });
    // };

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
