import Header from "../../components/Header"
import Slide from "./Slide"

import './home.css'
import Artigos from '../../components/Artigos'
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Link } from "react-router-dom"

export default function Home() {

    const [artigos, setArtigos] = useState([])
    const [destaque, setDestaque] = useState([])


    useEffect(()=> {

        // Captura dos dados dos artigos

        async function buscarPost() {
            const postRef = collection(db, "artigo")
            await getDocs(postRef)
            .then((snapshot)=> {
                let lista = []
                let listaDestaque = []

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        title: doc.data().title0,
                        img: doc.data().img0,
                        text: doc.data().text01,
                        destaque: true /** Resolver o problema do recebimento do destaque */
                    })
                })

                setArtigos(lista)

                // separando artigos em destaque

                listaDestaque = lista.filter((e)=> {
                    if(e.destaque) {
                        return e
                    }
                },)

                setDestaque(listaDestaque)


            })
            .catch((error)=> {
                console.log(error)
            })
        }
        buscarPost()


        


    },[])




  return(
    <>
    <Header/>


{/* Slide com os artigos em destaque */}


    <Slide artigos={destaque}/>




{/* Gerar os artigos na tela */}

    <section id="artigos">
        <h2 className="artigos--title">Artigos</h2>
    <div className="artigos--div">
        {
            artigos.map((e, indice)=> {

                if(indice <= 8) {
                    return(
                        <Artigos key={e.id} link={e.id} img={e.img} title={e.title} text={e.text} /> 
                    )
                }
                
            })
        }
        
    </div>
        <Link to={'/artigos'} className="artigos--button">Ver Mais</Link>
    </section>

    </>
  )
}

