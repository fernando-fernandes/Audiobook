import { LogoWhite } from '../Brand'

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