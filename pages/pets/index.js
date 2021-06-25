import Header from "../../components/header"
import Link from 'next/link'

function PetsPage() {
  return <>
    <Header />
    <div>
      <h2>Lista dos seus Pets</h2>
      <Link href="/home">
        <button>Voltar para home</button>
      </Link>
    </div>
  </>
}

export default PetsPage