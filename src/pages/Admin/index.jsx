import { useState } from 'react'
import Conteudo from '../../components/Conteudo'
import './admin.css'



export default function Admin() {

    const [conteudo, setConteudo] = useState([""])

    function addConteudo(e) {
        e.preventDefault()

        setConteudo([...conteudo, ""])
    }


    return(
        <div className='admin_page'>
            <div className='Menu'></div>
            <div className='admin_page--main'>
                <form action="" className='main--form'>

                    <div className='form--div form--principal'>
                        <label className='form_principal--title' htmlFor="">
                            Titulo: <input type="text" />
                        </label>
                        <label className='form_principal--img' htmlFor=""> Background: 
                            <input type="file" name="" id="" />
                        </label>
                        <label className='form_principal--descricao' htmlFor="">
                            <span>Descrição:</span>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </label>
                        <label className='form_principal--date' htmlFor="">
                            Dia de lançamento:
                            <input type="date" />
                        </label>
                    </div>

                    

                    <Conteudo/>

                    <button onClick={addConteudo}>Add conteduo extra</button>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}