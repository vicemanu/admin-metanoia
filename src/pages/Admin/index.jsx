import './admin.css'
import { signOut } from 'firebase/auth'
import Add from '../../components/Add'



export default function Admin() {



    async function headleLogout() {
        await signOut(auth);
    }



    return(
        <div className='admin_page'>
        <menu className='menu'>
            <button className='btn-logout' onClick={headleLogout}>Sair</button>
        </menu>
            
            <div className='admin_page--main'>
                <Add/>
            </div>
            <button onClick={e => {
                        console.log(progressTotal)
                    }}> ver valor</button>
        </div>
    )
}