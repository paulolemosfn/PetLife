export default function handlerRegister(req, res) {
    const { email, password, confirmPassword } = req.body;
    
    if (email === "adminID@petlife.com") {
        return res.status(401).json({
        message: 'E-mail já cadastrado'
        });
    };

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({
            message: 'Digitar o E-mail e senha são obrigatórios!'
        });
    }; 
    
    if (confirmPassword !== password){
        return res.status(400).json({
            message: 'As senhas tem que serem iguais'
        })
    }
    
    return res.status(200).json({ message: "Cadastrado" });
}
