import './admin.css'
import { signOut } from 'firebase/auth'
import Add from '../../components/Add'
import { auth } from '../../firebase'
import Logo from '../../components/Logo'
import Router from '../../Router'
import { Route, Routes } from 'react-router-dom'




export default function Admin() {

    async function headleLogout() {
        await signOut(auth);
    }


    return(
        <div className='admin_page'>
            <h1>Artigos</h1>
            <div className='admin_page--main'>
                    <section className='page_main--articles'>

                    </section>
                    <aside className='page_main--options'>

                    </aside>
            </div>
        </div>
    )
}