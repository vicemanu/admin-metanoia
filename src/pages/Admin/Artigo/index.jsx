import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { db } from "../../../firebase"


export default function Artigo(props) {


    const [e, setE] = useState(props.data)
    const [index, setIndex] = useState(props.index)
    const [destaque, setDestaque] = useState(props.data.destaque)
    const [remove, setRemove] = useState(props.data.remove)

    async function deleteArtigo(id) {
        const postRef = doc( db, "artigo", id)
            await deleteDoc(postRef)
            .then((snapshot)=> {
            })
            .catch((e)=> {
                console.log(e)
            })
    }

    return(
            <div className='article_box_edition' key={e.id}>
                                        <button onClick={ele => deleteArtigo(e.id)} className="article_box_edition--delete">Delete</button>

                                        <img className='article_box_edition--img' src={e.img} alt="" />
                                        <div className='article_box_edition--box_title' >
                                            <h3 >{e.title}</h3>
                                            <p>{e.date}</p> 
                                            
                                            <Link to={`/admin/edit/${e.id}`} className='article_box_edition_title--edit' href="">Editar</Link>
    
    
                                                <label className="article_box_edition_title--destaque" htmlFor={`swith${index}`}>
                                                Destaque: 
                                                <div className='switch' > 
                                                <input id={`swith${index}`} type="checkbox" checked={destaque} onChange={(element) => {
                                                    props.editDestaque(e.id, element.target.checked)
                                                    setDestaque(element.target.checked)
                                                }} />
                                                
                                                <span className='slider'></span>
                                            </div>
                                            </label>
    
    
                                            <label className="article_box_edition_title--remove"  htmlFor={`remove${index}`}>
                                            Delete: 
                                            <div className='switch' > 
                                                <input id={`remove${index}`} checked={remove} type="checkbox" onChange={(element) => {
                                                    props.editRemove(e.id, element.target.checked)
                                                    setRemove(element.target.checked)
                                                }} />
                                                <span className='slider'></span>
                                            </div>
                                            </label>    
                                            
                                        </div>
    
                                    </div>
    )
}