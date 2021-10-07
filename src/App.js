import Topbar from './Components/TopBar';
import Header from './Components/Header';
import Levels from './Components/Levels';
import Lessons from './Components/Lessons';
import Subjects from './Components/Subjects';
import { useEffect, useState } from 'react';
import api from './Services/api'

function App() {

    const [studant, setStudant] = useState([]); // Atribui o nome do aluno
    const [displpaySubject, setDisplaySubject] = useState([]); // Atribui os btns das disciplinas
    const [level, setLevel] = useState([]); // Atribui os dados dos Níveis
    const [lesson, setLesson] = useState([]); // Atribui os dados das lições
    const [btnMobile, setBtnMobile] = useState(false); // btn para abrir o menu responsivo

    //const [isChecked, setIsChecked] = useState(false);
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

        let btnId = e.currentTarget.value

        let btnLevel = level.filter(element => {
            return element.levelID === parseFloat(btnId)
        }).map(itemId => {
            return itemId.levelLesson
        })

        setLesson(btnLevel[0]);

        handleBtnMobile()

    }


    function handleBtnMobile() {

        setBtnMobile(!btnMobile)

        const body = document.querySelector('body')


        if (btnMobile) {
            body.classList.remove('noScroll')
        } else {
            body.classList.add('noScroll')
        }

        

    }


    if (loading) {
        return <p>Carregando...</p>;
    }




    return (
        <div className="container">

            <Topbar />

            <Header profile={studant} openBtnMobile={handleBtnMobile} />

            <div className="content">

                    <div className={`col-left ${btnMobile ? 'active' : ''}`}>
                        <Subjects subject={displpaySubject} handleSubject={handleSubject} />

                        <button type="button" className="closeBtnMobile" onClick={handleBtnMobile}>Fechar</button>


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
