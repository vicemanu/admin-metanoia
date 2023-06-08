import { useState } from 'react'
import './conteudo.css'

export default function Conteudo(props) {

    const [titulo, setTitulo] = useState('')
    const [img, setImg] = useState([""])
    const [citation, setCitation] = useState([""])
    const [paragraph, setParagraph] = useState([""])
    const [autor, setAutor] = useState([""])

        // console.log(titulo, img, citation, paragraph )

    const [todoConteudo, setTodoConteudo] = useState({titulo, img, citation, paragraph, autor})

    function handleChangeConteudo(){
        props.conteudo[props.index] = todoConteudo
        props.setConteudo([...props.conteudo])
        props.setArtigo({...props.artigo, conteudo: props.conteudo })
    }

    function addImg(e) {
        e.preventDefault()
        setImg([...img, ""])
    }

    function handleChangeImg(e, index) {
        img[index] = e.target.value
        setImg([...img])
        setTodoConteudo({titulo, img, citation, paragraph, autor})
    }

    function addParagraph(e) {
        e.preventDefault()
        setParagraph([...paragraph, ""])
    }

    function handleChangeParagraph(e, index) {
        paragraph[index] = e.target.value
        setParagraph([...paragraph])
        setTodoConteudo({titulo, img, citation, paragraph, autor})
    }

    function addCitation(e) {
        e.preventDefault()
        setCitation([...citation, ""])
        setAutor([...autor, ""])
    }

    function handleChangeCitation(e, index) {
        citation[index] = e.target.value
        setCitation([...citation])
        setTodoConteudo({titulo, img, citation, paragraph, autor})
    }

    function handleChangeAutor(e, index) {
        autor[index] = e.target.value
        setAutor([...autor])
        setTodoConteudo({titulo, img, citation, paragraph, autor})
    }

    

    return(

        <div className='conteudo' onChange={() => handleChangeConteudo()} >
            
                                    <label className='conteudo--title' htmlFor="">
                                        Titulo {props.index + 1}: 
                                        <input type="text" name="" id="" 
                                        onChange={e => {
                                            setTitulo(e.target.value)
                                            setTodoConteudo({titulo, img, citation, paragraph})
                                        }}
                                        />
                                    </label>
                                    <h2>Imagens 
                                        <button onClick={addImg}>
                                            <i class="bi bi-plus-circle"></i>
                                        </button>
                                    </h2>
                                    <div className='conteudo--div'>
                                        {
                                            img.map((e, index) => {
                                                return(
                                                <label key={index} htmlFor={`img${index}`}>
                                                    <input type="file" name="" id={`img${index}`}
                                                    onChange={e => { handleChangeImg(e, index)
                                                    }}
                                                    />
                                        </label>
                                                )
                                            })
                                        }

                                    </div>

                                    <h2>Citações 
                                        <button onClick={addCitation}>
                                            <i class="bi bi-plus-circle"></i>
                                        </button>
                                    </h2>
                                    <div className='conteudo--div'>
                                        {
                                            citation.map((e, index)=> {
                                                return(
                                                    <label key={index} className='conteudo_div--citacao'  htmlFor="">
                                                        Citação 1
                                                        <textarea  name="" id="" cols="30" rows="10"
                                                        onChange={e => {
                                                            handleChangeCitation(e, index)
                                                        }}
                                                        >
                                                        </textarea>
                                                        <span>Autor: 
                                                            <input type="text"
                                                            onChange={e => {
                                                                handleChangeAutor(e, index)
                                                            }}
                                                             />
                                                        </span>
                                                </label> 
                                                )
                                            })
                                        }
                                        
                                    </div>

                                    <h2>Paragrafos 
                                        <button onClick={addParagraph}>
                                            <i class="bi bi-plus-circle"></i>
                                        </button>
                                        
                                    </h2>
                                    <div className='conteudo--div'>
                                        {
                                            paragraph.map((e, index) => {
                                                return(
                                                    <label key={index} className='conteudo_div--paragrafo' htmlFor="">
                                                        Paragrafo {index + 1} 
                                                    <textarea name="" id="" cols="30" rows="10"
                                                    onChange={e => {handleChangeParagraph(e, index)}}
                                                    >

                                                    </textarea>
                                                </label>  
                                                )      
                                            })
                                        }
                                        
                                    </div>

                                
                                <button onClick={() => {props.setConteudo(['dadada'])}}>Salvar</button> {/** Transformar em um onChange da div completa que atualiza sozinho e enviar para o objeto da pagina principal */}
                                    
                            </div>

        
    )
}