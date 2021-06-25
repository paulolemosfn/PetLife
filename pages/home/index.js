import Header from "../../components/header"
import Link from 'next/link'

function HomePage() {
  return <>
    <Header />
    <div>
      <Link href="/pets">
        <button class="margem">Seus Pets</button>
      </Link>
      <Link href="/activities">
        <button class="margem">Atividades dos Pets</button>
      </Link>
    </div>
  </>
}

export default HomePage