import Topbar from './Components/TopBar';
import Header from './Components/Header';
import Levels from './Components/Levels';
import Lessons from './Components/Lessons';
import Subjects from './Components/Subjects';
import { useEffect, useState } from 'react';
import api from './Services/api'

function App() {

  const [aluno, setAluno] = useState([]);


  // const sendGetRequest = async () => {

  //   try {
  //     const resp = await axios.get('/api/Profile')

  //     setAluno(resp.data)

  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const sendGetRequest = async () => {

    try {
      const response = await api.get('')

      setAluno(response.data)

      //console.log([aluno])

    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {

    sendGetRequest()

    // axios.get('/api/Profile')
    // .then( res => {
    //   const dadosAluno = res.data;

    //   setAluno(dadosAluno);
    // })

  }, [])



  return (
    <div className="container">

      <Topbar />
      <Header profile={aluno} />

      <div className="content">

        <div className="col-left">
          <Subjects />

          <div className="container-levels">
            <Levels />
          </div>
        </div>

        <div className="col-right">
          {/* <Lessons /> */}
        </div>

      </div>

    </div>
  );
}

export default App;
