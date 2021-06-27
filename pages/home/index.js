import Header from "../../components/header"
import Link from 'next/link'

function HomePage() {
  return <>
    <Header />
    <div class="content">
      <div class="cards">
        <Link href="/pets">
          <button class="button card">Seus Pets</button>
        </Link>
        <Link href="/activities">
          <button class="button card">Atividades dos Pets</button>
        </Link>
      </div>
    </div>
  </>
}

export default HomePage