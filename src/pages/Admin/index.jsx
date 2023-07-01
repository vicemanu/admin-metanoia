import './admin.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { useState } from 'react';
import { collection, doc,  getDocs, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pesquisa from '../../components/Pesquisa';
import Artigo from './Artigo';




export default function Admin() {

    const [articles, setArticles] = useState([])
    const { slug } = useParams()

    useEffect(()=> {
        async function buscarArtigos() {
            const artigosRef = collection(db, 'artigo');
            await getDocs(artigosRef)
            .then((snapshot) => {
                let lista  = [];
                snapshot.forEach((doc)=> {
                    lista.push({
                        title: doc.data().title,
                        date: doc.data().date,
                        img: doc.data().img,
                        id: doc.id,
                        destaque: doc.data().destaque,
                        remove: doc.data().remove
                    })
                })

                if(!slug == "") {
                    let listaFilter = lista.filter((e)=> {
                        return e.title.toLowerCase().includes(slug.toLowerCase())
                      })
                      setArticles(listaFilter)

                } else {
                    setArticles(lista)
                }
                
    
            })
            .catch((error)=> {
                console.log(error)
            })
        }

        buscarArtigos()
    },[])


    
    async function editDestaque(id, destaque) {
                
            const postRef = doc( db, "artigo", id)
            await updateDoc(postRef, {
                destaque: destaque
            })
            .then((snapshot)=> {
                window.alert('conteudo editado')
            })
            .catch((e)=> {
                console.log(e)
            })
        }

        


    async function editRemove(id, remove) {
        const postRef = doc( db, "artigo", id)
            await updateDoc(postRef, {
                remove: remove
            })
            .then((snapshot)=> {
                window.alert('conteudo editado')
            })
            .catch((e)=> {
                console.log(e)
            })
    }

    async function headleLogout() {
        await signOut(auth);
    }


    return(
        <div className='admin_page'>
            <h1>Artigos</h1>
            <div className='admin_page--main'>
                    <section className='page_main--articles'>
                        
                        {articles?.map((e, index)=> {
                                return(
                                    <Artigo key={index} data={e} index={index} editDestaque={editDestaque} editRemove={editRemove}/>
                                )
                        })}
                        
                    </section>
                    <aside className='page_main--options'>
                        <Pesquisa/>
                    </aside>
            </div>
        </div>
    )
}