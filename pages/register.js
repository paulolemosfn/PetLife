import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from "../components/header"
import Link from 'next/link'

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();


  async function submitRegister() {


    try {
      const response = await axios.post('/api/register',
        {
          email: email,
          password: password,
          confirmPassword: confirmPassword
        });

      router.push("/");

    } catch (error) {
      alert(error.response.data.message)
    }
  };

  function alterationEmailRegister(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function alterationPasswordRegister(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  function alterationConfirmPassword(event) {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  }

  return <>
    <Header />
    <h2>Preencha seus dados para cadastro</h2>
    <form>
      <label>E-mail</label>
      <input id="email" type="text" placeholder="Digite aqui seu e-mail" onChange={alterationEmailRegister} />

      <label>Senha</label>
      <input id="senha" type="password" placeholder="Digite aqui sua senha" onChange={alterationPasswordRegister} />

      <label>Confirmação de senha</label>
      <input id="confirmarSenha" type="password" placeholder="Confirme sua senha" onChange={alterationConfirmPassword} />

    </form>
    <button onClick={submitRegister}>Cadastrar</button>
    <Link href="/">
      <a >Voltar para tela inicial</a>

    </Link>
  </>
}

export default RegisterPage