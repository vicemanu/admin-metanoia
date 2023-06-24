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
            <button className='btn-logout' onClick={headleLogout}>Sair</button>
        </menu>
            
            <div className='admin_page--main'>
                <Add/>
            </div>
        </div>
    )
}