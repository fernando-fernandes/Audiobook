import Flag from 'react-world-flags'

export default function Subjects(props) {


    return (
        <div className="container-subjects">

            {/* <h4 className="subjects">Disciplinas</h4> */}

            {
                props.subject.id && props.subject.id.map(item => {

                    return (
                        <label key={item.subjectID} className="flag">

                            <input type="radio" className="flag-input" name="subjects"
                                onChange={props.handleSubject}
                                value={item.subjectID}
                            />

                            <div className="flag-name">
                                <div className="flag-name_img">
                                    <Flag code={item.subjectName === 'Inglês' ? 'US' : 'JP'} />
                                </div>
                                <span className="flag-name_title">{item.subjectName}</span>
                            </div>

                        </label>
                    )
                })
            }
        </div>
    )
}