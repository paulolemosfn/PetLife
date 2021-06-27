import Header from "../../components/header"
import Link from 'next/link'

function ActivitiesPage() {
  return <>
    <Header />
    <div>
      <h2>Registros dos seus pets</h2>
      <Link href="/activities/select">
      <button>Selecione seu pet</button>
      </Link>
      <Link href="/home">
        <button>Voltar para home</button>
      </Link>
    </div>
  </>
}

export default ActivitiesPage