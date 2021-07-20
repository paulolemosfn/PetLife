import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios';

import Header from "../components/header"
import styles from '../styles/index.module.css'

function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  async function handleSubmit() {

    try {
      const response = await axios.post("/api/login", {
        email: email,
        password: password
      })

      router.push("/home");

    } catch (error) {
      alert(error.response.data.message);
    }

  }

  function quandoEmailForAlterado(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function quandoASenhaForAlterada(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  return <>
    <Header />
    <div className={styles.content}>
      <form>
        <label>E-mail</label>
        <input id="email" type="text" placeholder="Digite aqui seu e-mail" onChange={quandoEmailForAlterado} />
        <label>Senha</label>
        <input id="senha" type="password" placeholder="Digite aqui sua senha" onChange={quandoASenhaForAlterada} />
      </form>
      <button onClick={handleSubmit}>Entrar</button>
      <Link href="/register">
        <a >Clique aqui para se cadastrar</a>
      </Link>
    </div>
  </>
}

export default LoginPage

