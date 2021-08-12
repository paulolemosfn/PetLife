import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../../components/layout/layout'
import Header from "../../components/header"


function PetsPage() {

  const router = useRouter();
  const [pets, setPets] = useState([]);
  const [namePet, setNamePet] = useState('');



  useEffect(async () => {
    try {
      const pets = await axios.get('/api/pets');
      setPets(pets.data);
    } catch (error) { }

  });



  async function deletePet(id) {


    try {
      const response = await axios.delete(`/api/pets/${id}`);

      alert(`Seu pet foi excluído com sucesso!`);

      // router.push("/pets");


    } catch (error) {
      alert("Seu Pet não foi excluído!")
    }
  };

  // function deleteNamePet(event) {
  //   event.preventDefault();
  //   setNamePet(event.target.value);
  // onChange={deleteNamePet}
  // }

  return (
    <>
    <Header />

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
                  <td>
                    <button onClick={() => deletePet(pet.id)} > Excluir </button>
                  </td>
                  <td>
                    <Link href={`/pets/update?id=${pet.id}`}>
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
    </ >)
};

export default PetsPage