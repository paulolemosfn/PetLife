import Header from "../../components/header"
import Link from 'next/link'

function ActivitiesPage() {
  return <>
    <Header />
    <div>
      <Link href="/home">
        <button>Voltar para home</button>
      </Link>
    </div>
  </>
}

export default ActivitiesPage