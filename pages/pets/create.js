import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from 'next/link'
import Header from "../../components/header"

function CreatePage() {

  const [namePet, setNamePet] = useState('');
  // const [typePet, setTypePet] = useState('');
  // const [breedPet, setBreedPet] = useState('');
  const router = useRouter();


  async function petCreate() {

    try {
      const response = await axios.post('/api/pets',
        {
          namePet,
        });

      alert(`Seu pet ${namePet} foi cadastrado com sucesso!`);

      router.push("/pets");

    } catch (error) {
      alert(error.response.data.message)
    }
  };

  function alterationNamePet(event) {
    event.preventDefault();
    setNamePet(event.target.value);
  }

  // function alterationTypePet(event) {
  //   event.preventDefault();
  //   setTypePet(event.target.value);
  // }

  // function alterationBreedPet(event) {
  //   event.preventDefault();
  //   setBreedPet(event.target.value);
  // }

  return <>
    <Header />
    <div>
      <h2>Adicione seu pet</h2>
      <form>

        <label>Digite o nome do seu pet</label>
        <input id="nome_pet" type="text" placeholder="Digite aqui o nome do pet" onChange={alterationNamePet}></input>
        {/* <label>Digite aqui o tipo do seu pet</label>
        <input id="tipo pet" type="text" placeholder="Digite aqui o tipo do seu pet" onChange={alterationTypePet}></input>
        <label>Digite aqui a raça do seu pet</label>
        <input id="raça pet" type="text" placeholder="Digite aqui a raça do pet" onChange={alterationBreedPet}></input> */}

      </form>
      <button onClick={petCreate}>Adicionar</button>
      <Link href="/pets">
        <button>Voltar para os seus pets</button>
      </Link>

    </div>
  </>
}

export default CreatePage