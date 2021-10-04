import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Flag from 'react-world-flags'

export default function Header({nome, email}) {
    return (
        <div className="header-container">
            <div className="area-profile">
                <div className="profile">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="username">
                    <h1>{nome}</h1>
                    <p>{email}</p>
                </div>
            </div>

            <div className="area-info">

                <h4 className="subjects">Disciplinas</h4> 
                
                <label className="flag">
                    <input type="radio" className="flag-input" name="subjects" />
                    <div className="flag-name">
                        <div className="flag-name_img">
                            <Flag code='US' className="left" />
                        </div>
                        <span className="flag-name_title">Inglês</span>
                    </div>
                </label>

                <label className="flag">
                    <input type="radio" className="flag-input" name="subjects" />
                    <div className="flag-name">
                        <div className="flag-name_img">
                            <Flag code='JP' className="center" />
                        </div>
                        <span className="flag-name_title">Japonês</span>
                    </div>
                </label>
            </div>
        </div>
    )
}