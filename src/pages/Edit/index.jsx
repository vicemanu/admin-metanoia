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
            window.alert('conteudo editado')
        })
        .catch((e)=> {
            console.log(e)
        })
      }

      
    function removeConteudo(e, ind) {
        e.preventDefault()
        let filtrado = conteudo.filter((e, index)=> {
           if( index !== ind ) {
            return e;
           }
        })
        setConteudo([...filtrado])
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
                        <div className='form_principal--box-destaques'>
                            
                            <label className="box-destaques"  htmlFor={`swithdestaque`}>
                                            Destaque: 
                                            <div className='switch' > 
                                            <input id={`swithdestaque`} type="checkbox" onChange={(element) => {
                                                setArtigo({...artigo, destaque: element.target.checked})
                                            }} />
                                            <span className='slider'></span>
                                        </div>
                            </label>

                            <label className="box-destaques"  htmlFor={`swithRemove`}>
                                        Delete: 
                                        <div className='switch' > 
                                            <input id={`swithRemove`} type="checkbox" onChange={(element) => {
                                                setArtigo({...artigo, remove: element.target.checked})
                                            }} />
                                            <span className='slider'></span>
                                        </div>
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
                    </div> 



                    {/* Parte do conteudo do artigo */}
                    {
                        conteudo?.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} conteudo={conteudo} setConteudo={setConteudo} removeConteudo={removeConteudo}/>
                            )
                        })
                    }

                    <button onClick={addConteudo} >Add conteduo extra</button>
                    <button onClick={e => editArticle(e)}>Enviar</button>
                    
                </form>
        </section>

    )

}
