import{ useState } from 'react';
import Header from "../../components/header"
import Link from 'next/link'


function ActivitiesPage() {

  const [activities, setActivities] = useState([
    {
      nomePet: "Pretinha",
      tipoAtividade: "água" ,
      data: "12/02/21, 11:00" 
    },
    {
      nomePet: "Milly",
      tipoAtividade: "comida" ,
      data: "12/05/21, 21:00" 
    },

  ]);

  return <>
    <Header />
    <div>
      
      <h2>Registros dos seus pets</h2>
      <Link href="/activities/select">
      <button>Selecione seu pet</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nome do Pet</th>
            <th> Tipo de atividade</th>
            <th>Data e hora da atividade</th>
          </tr>
        </thead>
        <tbody>
          {
            activities.map(activitie =>(
              <tr key={activitie.nomePet}>
                <td>{activitie.nomePet}</td>
                <td>{activitie.tipoAtividade}</td>
                <td> {activitie.data}</td>
              </tr>
            ))
          }

        </tbody>

      </table>
      <Link href="/home">
        <button>Voltar para home</button>
      </Link>
    </div>
  </>
}

export default ActivitiesPage