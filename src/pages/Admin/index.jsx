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
                      let listaFilterSorted = listaFilter.sort((a, b) => {
                        const nameA = a.title.toLowerCase();
                        const nameB = b.title.toLowerCase();

                        if (nameA < nameB) {
                            return -1;
                          }
                          if (nameA > nameB) {
                            return 1;
                          }
                          return 0;
                      })
                      setArticles(listaFilterSorted)

                } else {
                    let listaSorted = lista.sort((a, b) => {
                        const nameA = a.title.toLowerCase();
                        const nameB = b.title.toLowerCase();

                        if (nameA < nameB) {
                            return -1;
                          }
                          if (nameA > nameB) {
                            return 1;
                          }
                          return 0;
                    })
                    setArticles(listaSorted)
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
                if(destaque) {
                    window.alert('conteudo destacado')
                } else {
                    window.alert('destaque retirado')
                }
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
                if(remove) {
                    window.alert('conteudo removido')

                } else {
                    window.alert('remoção retirada')
                }
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
                            if(e.destaque) 
                                return(
                                    <Artigo key={index} data={e} index={index} editDestaque={editDestaque} editRemove={editRemove}/>
                                )
                        })}

                    {articles?.map((e, index)=> {
                            if(!e.destaque & !e.remove) 
                                return(
                                    <Artigo key={index} data={e} index={index} editDestaque={editDestaque} editRemove={editRemove}/>
                                )
                        })}

                    {articles?.map((e, index)=> {
                            if(e.remove & !e.destaque ) 
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