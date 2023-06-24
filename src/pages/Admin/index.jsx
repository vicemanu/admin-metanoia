import './admin.css'
import { signOut } from 'firebase/auth'
import Add from '../../components/Add'
import { auth } from '../../firebase'
import Logo from '../../components/Logo'




export default function Admin() {

    async function headleLogout() {
        await signOut(auth);
    }



    return(
        <div className='admin_page'>
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
            
            <div className='admin_page--main'>
                <Add/>
            </div>
        </div>
    )
}