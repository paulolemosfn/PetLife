import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from "../../components/header"
import Link from 'next/link'


function updatePetPage() {
  const [pet, setPet] = useState({});
  const router = useRouter();

  //Função que é executada quando a página é carregada
  useEffect(async () => {
    const { id } = router.query; //Pega o id do pet no parâmetro da URL da página
    try {
      //Faz uma requisição para o servidor para buscar os dados do pet deste id
      const petRequest = await axios.get(`/api/pets/${id}`);
      setPet(petRequest.data); //Guarda os dados do pet, caso o pet exista
    } catch (error) {
      alert('Esse pet não existe no cadastro!');
      router.push("/pets")
    }
  });

  async function petUpdate() {
    try {
      //Faz a requisição PUT para atualizar os dados do pet pelo id
      const response = await axios.put(`/api/pets/${pet.id}`, {
        name: pet.name,
      })
      alert(`O nome do seu pet ${pet.name} foi alterado com sucesso!`);

      //Volta para tela de listagem de todos os pets
      router.push("/pets");

    } catch (error) {
      alert(error.response.data.message);
    }

  };

  function onChangeValue(event) {
    event.preventDefault();
    console.log(event.target.value);
    setPet({ ...pet, name: event.target.value });
  }


  return <>
    <Header />
    <h2>Preencha os dados para a atualização do nome do Pet:</h2>
    <form>
      <label>Nome antigo do Pet</label>
      <input id="petName" type="text" placeholder="Digite aqui o nome do pet" onChange={onChangeValue} value={pet.name} />
    </form>
    <button onClick={petUpdate}>Atualizar</button>
    <Link href="/pets">
      <a >Voltar para os seus pets</a>
    </Link>
  </>
};

export default updatePetPage