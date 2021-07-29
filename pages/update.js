import { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from "../components/header"
import Link from 'next/link'


function updatePetPage() {
    const [namePetOld, setNamePet] = useState('');
    const [namePetUpdated, setNamePetUpdated] = useState('');
    const router = useRouter();
    
    
    
    async function petUpdate() {
        try {
        const response = await axios.post('/api/pets/[id]', {
            namePet: namePetOld,
            namePetUpdated: namePetUpdated
        })
        alert(`O nome do seu pet ${namePet} foi alterado com sucesso para ${namePetUpdated}!`);

        router.push("/pets");
    
        // const db = await Database();
        // const pets = await db.all(`select * from pets where id = '${id}'`);
        // return res.json(pets);
            
      
        } catch (error) {
            alert(error.response.data.message);
        }
        
    };
    
    

        function oldNamePet(event) {
        event.preventDefault();
        setNamePet(event.target.value);
        }
        function newNamePet(event) {
        event.preventDefault();
        setNamePetUpdated(event.target.value);
        }

  


    return <>
    <Header />
    <h2>Preencha o dados para a atualização do nome do Pet</h2>
    <form>
      <label>Nome antigo do Pet</label>
      <input id="oldNamePet" type="text" placeholder="Digite aqui o antigo nome do pet" onChange={oldNamePet} />

      <label>Novo nome do Pet</label>
      <input id="newNamePet" type="text" placeholder="Digite aqui o novo nome do pet" onChange={newNamePet} />

    </form>
    <button onClick={petUpdate}>Atualizar</button>
    <Link href="/pets">
      <a >Voltar para os seus pets</a>

    </Link>
  </>
};

export default updatePetPage