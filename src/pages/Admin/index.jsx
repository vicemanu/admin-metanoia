import { useState } from 'react'
import Conteudo from '../../components/Conteudo'
import { db, storage } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import './admin.css'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'



export default function Admin() {

    const [conteudo, setConteudo] = useState([{title:"", img: [""], citation: [""], paragraph: [""], 
    author: [""] }])
    const [artigo, setArtigo] = useState({ title: "", img: [""], description: "", date: "", conteudo: ""})
    const [progressTotal, setProgressTotal] = useState(true)

    function addConteudo(e) {
        e.preventDefault()
        setConteudo([...conteudo, {title:"", img: [], citation: [""], paragraph: [""], 
        author: [""] }])
    }

    function enviarImagens() {

        if(!artigo.img === [""]) {
        const storageRefTitle = ref(storage, `images/${artigo.img.name}`)
        const uploadTaskTitle = uploadBytesResumable(storageRefTitle, artigo.img)

        uploadTaskTitle.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                if(progress == 100) {
                    setProgressTotal(false)
                } else {
                    setProgressTotal(true)

                }
                
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTaskTitle.snapshot.ref).then(url => {
                    setArtigo({...artigo, img: url})

                })
            }
   
        )
        }
        

        for (let i = 0; i < conteudo.length ; i++) {
            for(let e = 0; e < conteudo[i]?.img.length; e++) {

                if(!conteudo[i]?.img[e] == "") {
                    const storageRefCont = ref(storage, `images/${conteudo[i].img[e]}`)
                const uploadTaskCont = uploadBytesResumable(storageRefCont, conteudo[i].img[e])

                uploadTaskCont.on(
                    "state_changed",
                    snapshot => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        if(progress == 100) {
                            setProgressTotal(false)
                        } else {
                            setProgressTotal(true)
                        }
                    },
                    error => {
                        alert(error)
                    },
                    () => {
                        getDownloadURL(uploadTaskCont.snapshot.ref).then(url => {
                            conteudo[i].img[e] = url
                            setConteudo([...conteudo])
                        })
                    }
           
                )
                } 

                
            }

        }
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
        }).catch((error)=> {
            console.log(error)
        })
        
    }



    return(
        <div className='admin_page'>
            <div className='Menu'></div>
            <div className='admin_page--main'>
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
                                    e => setArtigo({...artigo, description: e.target.value})
                                }
                            ></textarea>
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

                    {/* Parte do conteudo do artigo */}

                    {
                        conteudo.map((e , index ) => {
                            return (
                                <Conteudo key={index} index={index} dados={e} conteudo={conteudo} setConteudo={setConteudo} artigo={artigo} setArtigo={setArtigo}/>
                            )
                        })
                    }

                    <button onClick={addConteudo}>Add conteduo extra</button>
                    <button onClick={enviarImagens} type='button'> Upload Imagens</button>
                    <button disabled={progressTotal} type="submit">Enviar</button>
                    
                </form>
            </div>
            <button onClick={e => {
                        console.log(progressTotal)
                    }}> ver valor</button>
        </div>
    )
}