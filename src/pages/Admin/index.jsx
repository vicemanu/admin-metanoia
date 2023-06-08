import { useState } from 'react'
import Conteudo from '../../components/Conteudo'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import './admin.css'



export default function Admin() {

    const [conteudo, setConteudo] = useState([""])
    const [artigo, setArtigo] = useState({title0: "", img0: "", description: "", date: "", conteudo: ""})

    function addConteudo(e) {
        e.preventDefault()

        setConteudo([...conteudo, ""])
    }

    async function eviarFireBase(e) {
        e.preventDefault()

        await addDoc(collection(db, "artigo"), {
           conteudo: artigo,
        }).then(()=> {
            setArtigo({title0: "", img0: "", description: "", date: "", conteudo: ""})
            setConteudo([])
        }).catch((error)=> {
            console.log(error)
        })
    }

    return(
        <div className='admin_page'>
            <div className='Menu'></div>
            <div className='admin_page--main'>
                <form action="" className='main--form' 
                >

                    <div className='form--div form--principal'>
                        <label className='form_principal--title' htmlFor="titulo0">
                            Titulo: <input type="text" id='titulo0' 
                            value={artigo.title0}
                            onChange={
                                e => setArtigo({...artigo, title0: e.target.value})
                                }  />
                        </label>
                        <label className='form_principal--img' htmlFor="background"> Background: 
                            <input type="file" name="" id="background" 
                            value={artigo.img0}
                            onChange={
                                e => setArtigo({...artigo, img0: e.target.value})
                                }  />
                        </label>
                        <label className='form_principal--descricao' htmlFor="descrição">
                            <span>Descrição:</span>
                            <textarea name="" id="descrição" cols="30" rows="10" 
                            value={artigo.description}
                            onChange={
                                e => setArtigo({...artigo, description: e.target.value})
                                }>

                            </textarea>
                        </label>
                        <label className='form_principal--date' htmlFor="lancamento">
                            Dia de lançamento:
                            <input type="date" id='lancamento'
                            value={artigo.date}
                            onChange={
                                e => setArtigo({...artigo, date: e.target.value})
                                }
                             />
                        </label>
                    </div>

                    {
                        conteudo.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} dados={e} conteudo={conteudo}  setConteudo={setConteudo} artigo={artigo} setArtigo={setArtigo}/>
                            )
                        })
                    }

                    <button onClick={addConteudo}>Add conteduo extra</button>

                    <button onClick={eviarFireBase} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}