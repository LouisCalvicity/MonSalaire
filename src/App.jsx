import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [role, setRole] = useState('');
  const [timePlayed, setTimePlayed] = useState(0);
  const [salary, setSalary] = useState(0);
  const [salaryImpots , setSalaryImpots] = useState(0)
  const calculateSalary = () => {
    let multiplier = 1;
    if (role === 'banquier' || role === 'prminister') {
      multiplier = 0.25;
    }
    
    if (role === 'juge' || role === 'ministre') {
      multiplier = 0.20;
    }


    setSalary((multiplier * timePlayed) / 11 );
    setSalaryImpots(multiplier * timePlayed / 11 / 100 * 20);

  };

  return (
    <div>
      <h1>Je calcule mon Salaire Sur Calvicity simplement.</h1>
      <input type="text" placeholder="Rôle" onChange={e => setRole(e.target.value)} className='role'/>
      <input type="number" placeholder="Temps joué" onChange={e => setTimePlayed(e.target.value)} className='time'/>
      <button onClick={calculateSalary}>Calculer le salaire</button>
      <p> Je touche par semaine sans impôts (brut) <br /> : <span className='salary'> {salary} </span> , <br /> avec impôts (net) : <br /> <span className='net'> {salary - salaryImpots} </span> </p>
      <p>Par mois : { salary * 4.257}</p>
    </div>
  );
};

export default App;
