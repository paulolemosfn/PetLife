import Header from "../../components/header"
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

function createPage() {
  const [ownerName, setOwnerName] = useState('');
  const router = useRouter();

  async function ownerCreate() {

    try {
      const response = await axios.post('/api/owners',
        {
          ownerName,
        });

      alert(`O novo dono ${ownerName} foi cadastrado com sucesso!`);

      router.push("/owners");

    } catch (error) {
      alert(error.response.data.message)
    }
  };

  function alterationOwnerName(event) {
    event.preventDefault();
    setOwnerName(event.target.value);
  }

  return <>
    <Header />
    <div>
      <h2>Registros dos donos dos pets</h2>
      <form>
          <label>Nome do dono</label>
          <input name="createOwner" type="text" placeholder="Digite aqui o nome do dono" onChange={alterationOwnerName}></input>
      </form>
      <button onClick={ownerCreate}>Adicionar</button>
      <Link href="/owners">
        <button>Voltar para todos os donos</button>
      </Link>
    </div>
  </>
}

export default createPage