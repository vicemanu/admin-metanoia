import './menu.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom';





export default function Admin(children) {

    async function headleLogout() {
        await signOut(auth);
    }


    return(
        <menu className='menu'>
            <Logo/>
            <nav className='menu--links'>
                <Link to={"/admin/home"}>Home</Link>
                <Link to={"/admin/new-article"}>NewArticle</Link>
            </nav>
            <button className='btn-logout' onClick={headleLogout}>
                <i className="bi bi-person-fill"></i> Logout
            </button>
        </menu>

    )
}