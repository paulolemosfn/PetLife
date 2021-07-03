import { useState } from 'react';
import Link from 'next/link'

import Layout from '../../components/layout/layout'

function PetsPage() {

  const [pets, setPets] = useState([
    {
      nome: "Pretinha"
    },
    {
      nome: "Milly"
    }]
  );

  return (
    <Layout>
      <div>
        <h2>Lista dos seus Pets</h2>
        <Link href="/pets/create">
          <button>Adicionar um pet</button>
        </Link>

        <table>
          <thead>
            <tr>
              <th>Nome do Pet</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              pets.map(pet => (
                <tr key={pet.nome}>
                  <td>{pet.nome}</td>
                  <td>Aqui colocaremos os botões para excluir e editar um pet</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <Link href="/home">
          <button>Voltar para home</button>
        </Link>
      </div>
    </Layout>
  )
}

export default PetsPage