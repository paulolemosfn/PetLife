import Header from "../components/header"
import Link from 'next/link'

function HomePage() {
  return <>
    <Header />
    <div class="centralized">
      <form>
        <label>E-mail</label>
        <input id="email" type="text" placeholder="Digite aqui seu e-mail" />
        <label>Senha</label>
        <input id="senha" type="password" placeholder="Digite aqui sua senha" />
      </form>
      <button>Entrar</button>
      <Link href="/register">
        <a >Clique aqui para se cadastrar</a>
      </Link>
    </div>
  </>
}

export default HomePage