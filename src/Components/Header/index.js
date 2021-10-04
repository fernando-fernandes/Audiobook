import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function Header({profile}) {
    return (
        <div className="header-container">

            <div className="area-profile">
                <div className="profile">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="username">
                    <h1>{profile.profileName}</h1>
                    <p>{profile.profileEmail}</p>
                </div>
            </div>

            <div className="area-settings">
                <p>id: {profile.profileID}</p>

                {
                    // profile.profileSubject.map( i => {
                    //     return(
                    //         <p>{i}</p>
                    //     )
                    // })
                }

                
            </div>
        </div>
    )
}