import Link from 'next/link'
import Header from "../components/header"
import styles from '../styles/index.module.css'

function LoginPage() {
  return <>
    <Header />
    <div className={styles.content}>
      <form>
        <label>E-mail</label>
        <input id="email" type="text" placeholder="Digite aqui seu e-mail" />
        <label>Senha</label>
        <input id="senha" type="password" placeholder="Digite aqui sua senha" />
      </form>
      <Link href="/home">
        <button>Entrar</button>
      </Link>
      <Link href="/register">
        <a >Clique aqui para se cadastrar</a>
      </Link>
    </div>
  </>
}

export default LoginPage