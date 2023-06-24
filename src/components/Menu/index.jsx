import './menu.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Logo from '../../components/Logo'





export default function Admin(children) {

    async function headleLogout() {
        await signOut(auth);
    }


    return(
        <menu className='menu'>
            <Logo/>
            <nav className='menu--links'>
                <a href="">Home</a>
                <a href="">NewArticle</a>
            </nav>
            <button className='btn-logout' onClick={headleLogout}>
                <i className="bi bi-person-fill"></i> Logout
            </button>
        </menu>

    )
}