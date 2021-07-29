import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import Layout from '../../components/layout/layout'

function PetsPage() {

  const [pets, setPets] = useState([]);

  useEffect(async () => {
    try {
      const pets = await axios.get('/api/pets');
      setPets(pets.data);
    } catch (error) {

    }
  });

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
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>Excluir</td>
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