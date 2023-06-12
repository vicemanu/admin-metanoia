import { useEffect, useState } from 'react'
import './conteudo.css'

export default function Conteudo(props) {

    const [titulo, setTitulo] = useState('')
    const [img, setImg] = useState([""])
    const [citation, setCitation] = useState([""])
    const [paragraph, setParagraph] = useState([""])
    const [autor, setAutor] = useState([""])

        // console.log(titulo, img, citation, paragraph )


    // const [todoConteudo, setTodoConteudo] = useState({titulo: titulo, img: img, citation: citation, paragraph: paragraph, autor: autor})

    // function handleChangeConteudo(){
    //     props.conteudo[props.index] = todoConteudo
    //     props.setConteudo([...props.conteudo])
    //     props.setArtigo({...props.artigo, conteudo: props.conteudo })
    // }

    function addImg(e) {
        e.preventDefault()
        props.conteudo[props.index].img = [...props.conteudo[props.index].img, ""]
        props.setConteudo([...props.conteudo])
    }

    function handleChangeImg(e, index) {
        props.conteudo[props.index].img[index] = e.target.value
        props.setConteudo([...props.conteudo])
    }

    function addCitation(e) {
        e.preventDefault()
        props.conteudo[props.index].citation = [...props.conteudo[props.index].citation, ""]
        props.conteudo[props.index].author = [...props.conteudo[props.index].author, ""]
        props.setConteudo([...props.conteudo])
    }

    function handleChangeCitation(e, index) {
        props.conteudo[props.index].citation[index] = e.target.value
        props.setConteudo([...props.conteudo])
    }

    function handleChangeAutor(e, index) {
        props.conteudo[props.index].author[index] = e.target.value
        props.setConteudo([...props.conteudo])
    }

    function addParagraph(e) {
        e.preventDefault()
        props.conteudo[props.index].paragraph = [...props.conteudo[props.index].paragraph, ""]
        props.setConteudo([...props.conteudo])

    }

    function handleChangeParagraph(e, index) {
        props.conteudo[props.index].paragraph[index] = e.target.value
        props.setConteudo([...props.conteudo])
        console.log(props.conteudo)
    }


    return(

        <div className='conteudo'>

            {/* Titulo do componente de conteudo */}
            
            <label className='conteudo--title' htmlFor="">
                Titulo {props.index + 1}: 
                <input type="text" name="" id="" 
                value={props.dados.title}
                onChange={e => {
                    props.conteudo[props.index].title = e.target.value
                    props.setConteudo([...props.conteudo])
                }}
                />
            </label>


            {/* Sistema de carregam de imagens do componente de conteudo */}
            {/* Retornar no campo img, fazer sistema de envio como dados de imagem e não do file do meu pc */}
            <h2>Imagens 
                <button onClick={addImg}>
                    <i className="bi bi-plus-circle"></i>
                </button>
            </h2>
            <div className='conteudo--div'>
                {
                    props.conteudo[props.index].img.map((e, index) => {
                        return(
                            <label key={index} htmlFor={`img${index}`}>
                                <input type="file" 
                                    name="" 
                                    id={`img${index}`}
                                    value={props.dados.img[index]}
                                    onChange={e => {
                                        handleChangeImg(e, index)
                                    }}
                                />
                            </label>
                        )
                    })
                }

            </div>

            {/* Citações e todo o sitema de citações */}

            <h2>Citações 
                <button onClick={addCitation}>
                    <i className="bi bi-plus-circle"></i>
                </button>
            </h2>
            <div className='conteudo--div'>
                {
                    props.conteudo[props.index].citation.map((e, index)=> {
                        return(
                            <label key={index} className='conteudo_div--citacao'  htmlFor={`citation${index}`}>
                                Citação {index + 1}
                                <textarea  name="" 
                                    id={`citation${index}`} 
                                    cols="30" rows="10"
                                    value={props.dados.citation[index]}
                                    onChange={e => {
                                        handleChangeCitation(e, index)
                                    }}
                                ></textarea>
                                <label>Autor: 
                                    <input type="text"
                                        value={props.dados.author[index]}
                                        onChange={e => {
                                            handleChangeAutor(e, index)
                                        }}
                                    />
                                </label>
                            </label> 
                        )
                    })
                }
            </div>

            {/* Paragrafos de conteudo */}


            <h2>Paragrafos 
                <button onClick={addParagraph}>
                    <i className="bi bi-plus-circle"></i>
                </button>
            </h2>
            <div className='conteudo--div'>
                {
                    props.conteudo[props.index].paragraph.map((e, index) => {
                        return(
                            <label key={index} className='conteudo_div--paragrafo' htmlFor={`paragraph${index}`}>
                                Paragrafo {index + 1} 
                                <textarea 
                                    name="" 
                                    id={`paragraph${index}`} 
                                    cols="30" rows="10"
                                    onChange={e => {handleChangeParagraph(e, index)}}
                                ></textarea>
                            </label>  
                        )      
                    })
                }
            </div> 

                                 
                                
        </div>

        
    )
}