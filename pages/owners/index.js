import Header from "../../components/header"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../../components/layout/layout'


function ownersPage() {

  const [owners, setOwners] = useState([]);
  const router = useRouter();
  const [namePet, setNamePet] = useState('');


  useEffect(async () => {
    try {
      const owners = await axios.get('/api/owners');
      setOwners(owners.data)
    } catch (error) { }

  });

  async function deleteOwner(id) {
    try {
      const response = await axios.delete(`/api/owners/${id}`);

      alert(`O dono foi excluído com sucesso!`);

    } catch (error) {
      alert("O dono não foi excluído!")
    }
  }

  return (
  <>
    <Header />
    <div>

      <h2>Registros dos donos dos pets</h2>
      <Link href="/owners/create">
        <button>Adicione um novo dono</button>
      </Link>
      
      <table>
        <thead>
          <tr>
            <th>Nome dos donos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            owners.map(owner => (
              <tr key={owner.id}>
                <td>{owner.name}</td>

                <td>
                  <button onClick={() => deleteOwner(owner.id)}> Excluir </button>
                </td>
                <td>
                  <Link href={`/owners/update?id=${owner.id}`}>
                    <button > Alterar </button>
                  </Link>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
      <Link href="/home">
        <button>Voltar para home</button>
      </Link>
    </div>
  </>)
};

export default ownersPage

