import './menu.css'
import { signOut } from 'firebase/auth'

export default function Menu() {

    async function headleLogout() {
        await signOut(auth);
    }

    return(
        <menu className='menu'>
        <button className='btn-logout' onClick={headleLogout}>Sair</button>
        </menu>
    )
}