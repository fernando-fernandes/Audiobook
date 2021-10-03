import { LogoWhite } from '../Brand'
import './styles.scss'


const AppTitle = () => <p>Audiobook</p>

export default function Topbar() {
    return (
        <div className="topbar-container">
            <div className="div-logo">
                <LogoWhite/>
            </div>
            
            <div>
                <AppTitle/>
            </div>
        </div>
    )
}