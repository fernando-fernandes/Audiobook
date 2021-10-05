export default function Levels(props) {
    return (

        <ul className="levels">
            {
                props.level.map(item => {
                    return (
                        <li key={item.levelID}>

                            <button type="button" onClick={props.handleLevel} value={item.levelID}>

                                <div className="title">
                                    <span className="icon">X</span>
                                    <span className="name">{item.levelName}</span>
                                </div>
                                <span className="qdt-tracks">{item.levelLesson.length} faixas</span>

                            </button>
                            
                        </li>

                        
                    )
                })
            }

        </ul>

    )
}