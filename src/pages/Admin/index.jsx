import { useState } from 'react'
import Conteudo from '../../components/Conteudo'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import './admin.css'



export default function Admin() {

    const [conteudo, setConteudo] = useState([{title:"", img: [""], citation: [""], paragraph: [""], 
    author: [""] }])
    const [artigo, setArtigo] = useState({ conteudo: ""})

    function addConteudo(e) {
        e.preventDefault()

        setConteudo([...conteudo, {title:"", img: [""], citation: [""], paragraph: [""], 
        author: [""] }])


        console.log(conteudo)
    }


    async function eviarFireBase(e) {
        e.preventDefault()

        await addDoc(collection(db, "artigo"), {
            conteudo: artigo.conteudo,
        }).then(()=> {
            setArtigo({conteudo: ""})
            setConteudo([{title:"", img: [""], citation: [""], paragraph: [""], 
            author: [""] }])
        }).catch((error)=> {
            console.log(error)
        })
    }



    return(
        <div className='admin_page'>
            <div className='Menu'></div>
            <div className='admin_page--main'>
                <form action="" onSubmit={eviarFireBase} className='main--form' 
                >

                    {
                        conteudo.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} dados={e} conteudo={conteudo} setConteudo={setConteudo} artigo={artigo} setArtigo={setArtigo}/>
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