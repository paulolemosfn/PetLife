import Header from "../../components/header"
import Link from 'next/link'

function SelectPage() {
  return <>
    <Header />
    <div>
      <h2>Registros dos seus pets</h2>
      <form>
          <label>Nome do pet</label>
          <input name="select pet" type="text" placeholder="Digite aqui o nome do pet"></input>
      </form>
      <Link href="/activities/select/add">
      <button>Selecionar</button>
      </Link>
      <Link href="/activities">
        <button>Voltar para as suas atividades</button>
      </Link>
    </div>
  </>
}

export default SelectPage