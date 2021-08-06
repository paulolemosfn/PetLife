
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from "../../components/header"
import Link from 'next/link'


function updateOwnerPage() {
  const [owner, setOwner] = useState({});
  const router = useRouter();

  //Função que é executada quando a página é carregada
  useEffect(async () => {
    const { id } = router.query; //Pega o id do pet no parâmetro da URL da página
    try {
      //Faz uma requisição para o servidor para buscar os dados do pet deste id
      const ownerRequest = await axios.get(`/api/owners/${id}`);
      setOwner(ownerRequest.data); //Guarda os dados do pet, caso o pet exista
    } catch (error) {
      alert('Esse dono ainda não existe no cadastro!');
      router.push("/owners")
    }
  });

  async function ownerUpdate() {
    try {
      //Faz a requisição PUT para atualizar os dados do pet pelo id
      const response = await axios.put(`/api/owner/${owner.id}`, {
        name: owner.name,
      })
      alert(`O nome do dono "${owner.name}" foi alterado com sucesso!`);

      //Volta para tela de listagem de todos os pets
      router.push("/owners");

    } catch (error) {
      alert(error.response.data.message);
    }

  };

  function onChangeValue(event) {
    event.preventDefault();
    console.log(event.target.value);
    setOwner({ ...owner, name: event.target.value });
  }


  return <>
    <Header />
    <h2>Preencha os dados para a atualização do nome do dono:</h2>
    <form>
      <label>Nome antigo do dono</label>
      <input id="ownerName" type="text" placeholder="Digite aqui o nome do dono" onChange={onChangeValue} value={owner.name} />
    </form>
    <button onClick={ownerUpdate}>Atualizar</button>
    <Link href="/owners">
      <a >Voltar para todos os donos</a>
    </Link>
  </>
};

export default updateOwnerPage