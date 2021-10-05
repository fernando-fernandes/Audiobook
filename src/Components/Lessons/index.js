export default function Lessons(props) {
    return(
        <div className="container-lessons">
            {
                props.lesson && props.lesson.map( item => {
                    return(
                        

                        <div key={item.lessonID}>
                            <p>Lição: {item.lessonName}</p>
                            <p>id: {item.lessonID}</p>
                            <p>Duração: {item.lessonDuration}</p>
                            <audio controls>
                                <source src={item.lessonURL} type="audio/mpeg" />
                            </audio>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}