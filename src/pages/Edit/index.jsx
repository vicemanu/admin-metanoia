import './edit.css'
import { useEffect, useState } from 'react'
import Conteudo from './Conteudo'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Edit() {
    
    const { slug } = useParams()
    const [artigo, setArtigo] = useState({})
    const [conteudo, setConteudo] = useState([{title:"", img: [""], citation: [""], paragraph: [""], 
    author: [""] }])

    useEffect(()=> {
    async function artigo() {

        const postRef = doc( db, "artigo", slug)

        await getDoc(postRef)
        .then((snapshot)=> {
          setArtigo(snapshot.data())
          setConteudo([...snapshot.data().conteudo])
        })
        .catch((e)=> {
            console.log(e)
          
        })
      }

      artigo()
    },[])

    console.log(artigo)
    // console.log(conteudo)

    useEffect(()=> {
        setArtigo({...artigo, conteudo: conteudo})
    },[conteudo])

    function addConteudo(e) {
        e.preventDefault()
        setConteudo([...conteudo, {title:"", img: [""], citation: [""], paragraph: [""], 
        author: [""] }])
    }


   async function editArticle(e) {

        e.preventDefault()
        
        const postRef = doc( db, "artigo", slug)

        await updateDoc(postRef, artigo)
        .then((snapshot)=> {
        })
        .catch((e)=> {
            console.log(e)
        })
      }
    

    return(
        <section className='newarticle'>
            <form className='main--form'>
                    <div className='form--div form--principal'>

                        {/* Parte principal do artigo */}

                        <label className='form_principal--title' htmlFor="titulo">
                            Titulo: <input type="text" id='titulo' 
                            onChange={
                                e => setArtigo({...artigo, title: e.target.value})
                                }  />
                        </label>
                        <label className='form_principal--img' htmlFor="background"> Background: 
                            <input type="file" name="" id="background" 
                                onChange={e => {
                                    setArtigo({...artigo, img: e.target.files[0]})
                                    }
                                }  
                            />
                        </label>
                        <label className='form_principal--descricao' htmlFor="descrição">
                            <span>Descrição:</span>
                            <textarea name="" id="descrição" cols="30" rows="10" 
                                onChange={
                                    (e) => {
                                        const valor = e.target.value
                                        if(valor.length <= 200) {
                                            setArtigo({...artigo, description: valor})
                                        }
                                        
                                    }
                                }
                            ></textarea>
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



                    {/* Parte do conteudo do artigo */}
                    {
                        conteudo?.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} conteudo={conteudo} setConteudo={setConteudo}/>
                            )
                        })
                    }

                    <button onClick={addConteudo} >Add conteduo extra</button>
                    <button onClick={e => editArticle(e)}>Enviar</button>
                    
                </form>
        </section>

    )

}
