import Database from '../../../db/config'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';


export default async function handler(req, res) {

  const db = await Database();
  // const { id } = req.query;
  const name = await db.get(`select name from pets where name = ${namePet}`);
  
  
  const [pets, setPets] = useState([]);
  
  useEffect(async () => {
    try {
      const pets = await axios.get('/api/pets');
      setPets(pets.data);
    } catch (error) {
      
    }
  });
  
  return res.json(pet);
}