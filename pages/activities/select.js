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
      <Link href="/home">
        <button>Voltar para home</button>
      </Link>
    </div>
  </>
}

export default SelectPage