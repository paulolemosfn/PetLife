import Header from "../components/header"

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
      <a href="./register">Clique aqui para se cadastrar</a>
    </div>
  </>
}

export default HomePage