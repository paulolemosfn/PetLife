// import database from '../../../database'
export default function handlerCreate(req, res) {

  const { namePet, typePet, breedPet } = req.body;

  // const petExists = database.pets.find(eachUser => eachUser.namePet === namePet);

  // if (petExists) {
  //     return res.status(400).json({
  //         message: 'Pet já cadastrado!'
  //     });
  // };

  if (namePet === '' || typePet === '' || breedPet === '') {
    return res.status(400).json({
      message: 'Dados incompletos!'
    });
  }

  return res.json(database.pets);
}