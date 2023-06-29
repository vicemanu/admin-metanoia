import './admin.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Pesquisa from '../../components/Pesquisa';




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
                        id: doc.id
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

    function editDestaque(id, destaque) {
        console.log(id, destaque)
    }

    function editRemove(id, destaque) {
        console.log(id, destaque)
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
                                <div className='article_box_edition' key={e.id}>
                                    <img className='article_box_edition--img' src={e.img} alt="" />
                                    <div className='article_box_edition--box_title' >
                                        <h3 >{e.title}</h3>
                                        <p>{e.date}</p> 
                                        
                                        <Link to={`/admin/edit/${e.id}`} className='article_box_edition_title--edit' href="">Editar</Link>
                                        
                                        <label className="article_box_edition_title--destaque"  htmlFor={`swith${index}`}>
                                            Destaque: 
                                            <div className='switch' > 
                                            <input id={`swith${index}`} type="checkbox" onChange={(element) => {
                                                editDestaque(e.id, element.target.checked)
                                            }} />
                                            <span className='slider'></span>
                                        </div>
                                        </label>
                                        <label className="article_box_edition_title--remove"  htmlFor={`remove${index}`}>
                                        Delete: 
                                        <div className='switch' > 
                                            <input id={`remove${index}`} type="checkbox" onChange={(element) => {
                                                editRemove(e.id, element.target.checked)
                                            }} />
                                            <span className='slider'></span>
                                        </div>
                                        </label>    
                                        
                                    </div>

                                </div>
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