export default function Lessons(props) {
    return(
        <div className="container-lessons">
            {
                props.lesson && props.lesson.map( item => {
                    return(
                        <div key={item.lessonID} className="container-audio">
                            <span className="lesson-id">{item.lessonID}</span>
                            <p className="lesson-name">{item.lessonName}</p>
                            {/* <p>Duração: {item.lessonDuration}</p> */}
                            <audio controls>
                                <source src={item.lessonURL} type="audio/mpeg" />
                            </audio>
                        </div>
                    )
                })
            }
        </div>
    )
}