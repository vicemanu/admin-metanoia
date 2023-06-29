import './pesquisa.css'
import { useState } from 'react'


export default function Pesquisa() {

    const [dados, setDados] = useState()
    
    return(
        <form action={`/admin/home/${dados === undefined ? "": dados }`}   className='form--pesquisa'>
            <input type="text" onChange={e => setDados(e.target.value)} />
            <button type='submit'> <i className="bi bi-search"></i> </button>
        </form>
    )

}
