import { useState } from 'react'
import Conteudo from '../../components/Conteudo'
import './admin.css'



export default function Admin() {

    const [conteudo, setConteudo] = useState([""])
    const [artigo, setArtigo] = useState({})
    const [valor, setValor] = useState([])


    function addConteudo(e) {
        e.preventDefault()

        setConteudo([...conteudo, ""])
    }

    console.log(artigo)

    return(
        <div className='admin_page'>
            <div className='Menu'></div>
            <div className='admin_page--main'>
                <form action="" className='main--form'>

                    <div className='form--div form--principal'>
                        <label className='form_principal--title' htmlFor="titulo0">
                            Titulo: <input type="text" id='titulo0' onChange={
                                e => setArtigo({...artigo, title0: e.target.value})
                                }  />
                        </label>
                        <label className='form_principal--img' htmlFor="background"> Background: 
                            <input type="file" name="" id="background" onChange={
                                e => setArtigo({...artigo, img0: e.target.value})
                                }  />
                        </label>
                        <label className='form_principal--descricao' htmlFor="descrição">
                            <span>Descrição:</span>
                            <textarea name="" id="descrição" cols="30" rows="10" 
                            onChange={
                                e => setArtigo({...artigo, description: e.target.value})
                                }>

                            </textarea>
                        </label>
                        <label className='form_principal--date' htmlFor="lancamento">
                            Dia de lançamento:
                            <input type="date" id='lancamento'
                            onChange={
                                e => setArtigo({...artigo, date: e.target.value})
                                }
                             />
                        </label>
                    </div>

                    {
                        conteudo.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} conteudo={e} setConteudo={setConteudo}/>
                            )
                        })
                    }

                    <button onClick={addConteudo}>Add conteduo extra</button>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}