
import Artigos from '../../components/Artigos'
import { useEffect, useState } from 'react'
import './artigo.css'
import Recomend from '../../components/Recomend'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function Artigo() {

    const { slug } = useParams()
    const [artigo, setArtigo] = useState([])


    useEffect(()=> {
    async function artigo() {

        const postRef = doc( db, "artigo", slug)

        await getDoc(postRef)
        .then((snapshot)=> {
          setArtigo(snapshot.data())
        })
        .catch((e)=> {
            console.log(e)
          
        })
      }

      artigo()
    },[])

  

    console.log(artigo)
    
  return(
    <>
      <header className="header--artigo" style={{backgroundImage: `url(${artigo.img0})`}}> {/** Imagem que vai do artigo */}
            <div className='header__artigo--shadow'></div>
            <div className='header__artigo--title_header'>
                <h1>{artigo.title0}</h1>
                <p>descrição</p>
            </div>
        </header>
        <main className='main--artigo'>
          <section className='main__artigo--todo__artigo'>
            <article className='todo__artigo--conteudo__artigo'>

            </article>
          </section>
          <section className='main__artigo--recomendados'>
            <h3 className='recomendados--title'>
              Recomendados
            </h3>
            <Recomend/> {/** Artigos recomendados */}
          </section>
        </main>
        
    </>
  )
}

 
