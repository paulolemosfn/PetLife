import Header from "../components/header"
import Link from 'next/link'

function RegisterPage() {
  return <>
    <Header />
    <h2>Preencha seus dados para cadastro</h2>
    <form>
      <label>E-mail</label>
      <input id="email" type="text" placeholder="Digite aqui seu e-mail" />
      <label>Senha</label>
      <input id="senha" type="password" placeholder="Digite aqui sua senha" />
      <label>Confirmação de senha</label>
      <input id="senha" type="password" placeholder="Confirme sua senha" />
    </form>
    <button>Cadastrar</button>
    <Link href="/">
      <a >Voltar para tela inicial</a>
    </Link>
  </>
}

export default RegisterPage