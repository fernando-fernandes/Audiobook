import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPen, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header({ profile, openBtnMobile }) {
    return (
        <div className="header-container">

            
                <button type="button" className="btnMobile" onClick={openBtnMobile}>
                <FontAwesomeIcon icon={faBars} />
                </button>

            <div className="area-profile">
                <div className="profile">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="username">
                    <h1>{profile.profileName}</h1>
                    <p>{profile.profileEmail}</p>
                    <button type="button"><FontAwesomeIcon icon={faPen} /> <span>Editar</span></button>
                </div>
            </div>



        </div>
    )
}