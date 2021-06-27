import Header from "../../components/header"
import Link from 'next/link'

function CreatePage() {
  return <>
    <Header />
    <div>
      <h2>Adicone seu pet</h2>
      <form>

        <label>Digite o nome do seu pet</label>
        <input id="nome pet" type="text" placeholder="Digite aqui o nome do pet"></input>
        <label>Digite aqui o tipo do seu pet</label>
        <input id="tipo pet" type="text" placeholder="Digite aqui o tipo do seu pet"></input>
        <label>Digite aqui a raça do seu pet</label>
        <input id="raça pet" type="text" placeholder="Digite aqui a raça do pet"></input>

        <button>Adicionar</button>
      </form>
      <Link href="/pets">
        <button>Voltar para os seus pets</button>
      </Link>

    </div>
  </>
}

export default CreatePage