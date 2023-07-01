import './newarticle.css'
import { useState } from 'react'
import Conteudo from '../../components/Conteudo'
import { db, storage } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export default function NewAticle() {

    const [conteudo, setConteudo] = useState([{title:"", img: [""], citation: [""], paragraph: [""], 
    author: [""] }])
    const [artigo, setArtigo] = useState({ title: "", img: [""], description: "", date: "", conteudo: "",destaque: false, remove: false})
    const [progressTotal, setProgressTotal] = useState(0)

    function addConteudo(e) {
        e.preventDefault()
        setConteudo([...conteudo, {title:"", img: [""], citation: [""], paragraph: [""], 
        author: [""] }])
    }

    function enviarImagens() {

        const uploadTaskCont = []
        let valorIndex = 0
        
        const storageRefTitle = ref(storage, `images/${artigo.img.name}`)
        uploadTaskCont.push(uploadBytesResumable(storageRefTitle, artigo.img)) 

        uploadTaskCont[valorIndex].on(
            "state_changed",
            () => {
                getDownloadURL(uploadTaskCont[0].snapshot.ref).then(url => {
                    setArtigo({...artigo, img: url})

                })
            }
   
        )


        conteudo.map((e, index1)=> {
            e.img.map((elemt, index2)=> {

                valorIndex ++

                const storageRefCont = ref(storage, `images/${elemt.name}`)
                uploadTaskCont.push(uploadBytesResumable(storageRefCont, elemt)) 

                uploadTaskCont[valorIndex].on( 
                    "state_changed",
                    () => {
                        getDownloadURL(uploadTaskCont[valorIndex].snapshot.ref).then(url => {
                            conteudo[index1].img[index2] = url
                            setConteudo([...conteudo])
                        })
                    }
           
                )
            })
            Promise.all(uploadTaskCont)
            .then(()=> {
                setProgressTotal(100)
            })
            .catch((error=> {
                console.log(error)
            }))
        
        })
    }


    async function eviarFireBase(e) {
        e.preventDefault()

        await addDoc(collection(db, "artigo"), {
            title: artigo.title,
            img: artigo.img,
            description: artigo.description,
            date: artigo.date,
            conteudo: conteudo,
        }).then(()=> {
            setArtigo({ title: "", img: "", description: "", date: "", conteudo: ""})
            setConteudo([{title:"", img: [""], citation: [""], paragraph: [""], 
            author: [""] }])
            setProgressTotal(true)
        }).catch((error)=> {
            console.log(error)
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
    

    console.log(artigo)

    return(
        <section className='newarticle'>
            <form action="" onSubmit={eviarFireBase} className='main--form'>
                    <div className='form--div form--principal'>

                        {/* Parte principal do artigo */}

                        <label className='form_principal--title' htmlFor="titulo">
                            Titulo: <input type="text" id='titulo' 
                            value={artigo.title}
                            onChange={
                                e => setArtigo({...artigo, title: e.target.value})
                                }  />
                        </label>

                        <label className='form_principal--img' htmlFor="background"> Background: 
                            <input type="file" name="" id="background" 
                                value={artigo.img.value}
                                onChange={e => {
                                    setArtigo({...artigo, img: e.target.files[0]})
                                    }
                                }  
                            />
                        </label>
                        <label className='form_principal--descricao' htmlFor="descrição">
                            <span>Descrição:</span>
                            <textarea name="" id="descrição" cols="30" rows="10" 
                                value={artigo.description}
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
                        conteudo.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} dados={e} conteudo={conteudo} setConteudo={setConteudo} artigo={artigo} setArtigo={setArtigo} removeConteudo={removeConteudo}/>
                            )
                        })
                    }

                    <button onClick={addConteudo}>Add conteduo extra</button>
                    <button onClick={enviarImagens} type='button'> Upload Imagens</button>
                    <button  type="submit">Enviar</button>
                    
                </form>
        </section>
    )
}