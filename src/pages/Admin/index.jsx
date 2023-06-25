import './admin.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';




export default function Admin() {

    const [articles, setArticles] = useState([])

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
    
                setArticles(lista)
                console.log(articles)

            })
            .catch((error)=> {
                console.log(error)
            })
        }

        buscarArtigos()
    },[])

    


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
                                        
                                        <a className='article_box_edition_title--edit' href="">Editar</a>
                                        
                                        <label className="article_box_edition_title--destaque"  htmlFor={`swith${index}`}>
                                            Destaque: 
                                            <div className='switch' > 
                                            <input id={`swith${index}`} type="checkbox" />
                                            <span className='slider'></span>
                                        </div>
                                        </label>
                                        
                                        <a className='article_box_edition_title--remove' href="">Delete</a>
                                    </div>

                                </div>
                            )
                        })}
                    </section>
                    <aside className='page_main--options'>

                    </aside>
            </div>
        </div>
    )
}