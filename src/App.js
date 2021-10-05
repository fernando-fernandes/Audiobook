import Topbar from './Components/TopBar';
import Header from './Components/Header';
import Levels from './Components/Levels';
import Lessons from './Components/Lessons';
import Subjects from './Components/Subjects';
import { useEffect, useState } from 'react';
import api from './Services/api'

function App() {

  const [studant, setStudant] = useState([]);
  const [displpaySubject, setDisplaySubject] = useState([]);
  const [level, setLevel] = useState([]);
  const [lesson, setLesson] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const getStudant = async () => {

      setLoading(true);

      try {
        const response = await api.get('/Profile')

        setStudant(response.data)

        const data = {
          id: response.data.profileSubject
        }

        setDisplaySubject(data);

      } catch (err) {
        console.error(err)

      } finally {
        setLoading(false);
      }

    }

    getStudant();

  }, [])



  const getLevels = async (id) => {

    //setLoading(true);

    try {
      const response = await api.get(`/SubjectDetail/${id}`)

      setLevel(response.data)

    } catch (err) {
      console.error(err)

    } finally {
      //setLoading(false);
    }

  }


  function handleSubject(e) {

    let subjectId = e.currentTarget.value

    getLevels(subjectId);
  }


  function handleLevel(e) {

    let levelId = e.currentTarget.value


    console.log(level)


    console.log(levelId)

  }


  if (loading) {
    return <p>Data is loading...</p>;
  }




  return (
    <div className="container">

      <Topbar />

      <Header profile={studant} />


      <div className="content">

        <div className="col-left">
          <Subjects subject={displpaySubject} handleSubject={handleSubject} />

          <div className="container-levels">
            <Levels level={level} handleLevel={handleLevel} />
          </div>
        </div>

        <div className="col-right">
          <Lessons lesson={lesson} />
        </div>

      </div>

    </div>
  );
}

export default App;
