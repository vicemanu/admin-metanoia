
import Artigos from '../../components/Artigos'
import Logo from '../../components/Logo'
import './artigospage.css'
import Recomend from '../../components/Recomend'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"

export default function Artigospage() {

  const [posts, setPosts] = useState([])

  useEffect(()=> {
      async function buscarPost() {
          const postRef = collection(db, "artigo")
          await getDocs(postRef)
          .then((snapshot)=> {
              let lista = []

              snapshot.forEach((doc) => {
                  lista.push({
                      id: doc.id,
                      title: doc.data().title0,
                      img: doc.data().img0,
                      text: doc.data().text01
                  })
              })


              setPosts(lista)
          })
          .catch((error)=> {
              console.log(error)
          })
      }
      buscarPost()
  },[])


  return(
    <>
      <header className="header--artigos">
            <div className='header__artigos--shadow'></div>
            <div className='header__artigos--title_header'>
                <h1><Logo/></h1>
                <p>Transformando a sua mente em Cristo</p>
            </div>
        </header>
        <main className='main--artigospage'>
          <section className='main__artigospage--todos__artigos'>

            {
              posts.map((e)=> {
                  return(
                      <Artigos key={e.id} link={e.id} img={e.img} title={e.title} text={e.text} /> 
                  )
              })
          }
            
            
            {/** mapeamento de todos os artigos com um sistema de filtro de pesquisa */}

          </section>
          <section className='main__artigospage--recomendados'>
            <h3 className='recomendados--title'>
              Recomendados
            </h3>
            <Recomend/> {/** Artigos recomendados */}
          </section>
        </main>
        
    </>
  )
}

 
