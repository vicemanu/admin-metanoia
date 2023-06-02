import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './menu.css'

export default function Menu() {
    return(

        // Fazer o nav do mobile
        <menu className="menu">
            <Logo/>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/artigos'}>Artigos</Link>
            </nav>
        </menu>
    )
}