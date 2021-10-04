import Topbar from './Components/TopBar';
import Header from './Components/Header';
import Levels from './Components/Levels';
import Lessons from './Components/Lessons';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [aluno, setAluno] = useState([]);

  useEffect( () => {

    axios.get('/api/Profile')
    .then( res => {
      const dadosAluno = res.data;

      setAluno(dadosAluno);
    })

  }, [])


  
  return (
    <div className="container">

      <Topbar />
      <Header nome={aluno.profileName} email={aluno.profileEmail}/>

      <div className="content">

        <div className="col-left">
          <Levels/>
        </div>

        <div className="col-right">
          <Lessons/>
        </div>
   
      </div>

    </div>
  );
}

export default App; 
