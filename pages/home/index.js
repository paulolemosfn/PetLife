import Header from "../../components/header"
import Link from 'next/link'

function HomePage() {
  return <>
    <Header />
    <div>
      <div>
        <Link href="/pets">
          <button>Seus Pets</button>
        </Link>
        <Link href="/activities">
          <button>Atividades dos Pets</button>
        </Link>
        <Link href="/owners">
          <button> Acessar os donos </button>
        </Link>
      </div>
    </div>
  </>
}

export default HomePage