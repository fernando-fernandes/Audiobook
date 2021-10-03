import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="header-container">
            <div className="area-profile">
                <div className="profile-container">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>

            <div className="area-info">
                texto
            </div>
        </div>
    )
}