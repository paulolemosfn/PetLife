import database from '../../db'
export default async function handlerRegister(req, res) {

    const { email, password, confirmPassword } = req.body;

    const sql = `SELECT * FROM users where email = ?`;
    const params = [email];

    // database.db.get(sql, params, (err, userExists) => {
    //     if (userExists) {
    //         return res.status(400).json({
    //             message: 'E-mail já cadastrado'
    //         });
    //     };


    // });

    // const userExists = database.users.find(eachUser => eachUser.email === email);



    // if (!email || !password || !confirmPassword) {
    //     return res.status(400).json({
    //         message: 'É obrigatório informa e-mail, senha e confirmação da senha!'
    //     });
    // };

    // if (confirmPassword !== password) {
    //     return res.status(400).json({
    //         message: 'As senhas estão diferentes'
    //     })
    // }

    // const newUser = {
    //     email,
    //     password
    // };

    // await database.users.push(newUser);

    // return res.status(201).json({ email: newUser.email });

}
