import { useState } from 'react'
import './conteudo.css'

export default function Conteudo(props) {

    const [titulo, setTitulo] = useState('')
    const [img, setImg] = useState([""])
    const [citation, setCitation] = useState([""])
    const [paragraph, setParagraph] = useState('')

        // console.log(titulo, img, citation, paragraph )

    const [todoConteudo, setTodoConteudo] = useState({titulo, img, citation, paragraph})

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
        setTodoConteudo({titulo, img, citation, paragraph})
    }

    function addParagraph(e) {
        e.preventDefault()
        setParagraph([...paragraph, ""])
    }

    function handleChangeParagraph(e, index) {
        paragraph[index] = e.target.value
        setParagraph([...paragraph])
        setTodoConteudo({titulo, img, citation, paragraph})
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

                                    <h2>Citações <span>+</span></h2>
                                    <div className='conteudo--div'>
                                        <label className='conteudo_div--citacao'  htmlFor="">
                                            Citação 1
                                            <textarea  name="" id="" cols="30" rows="10"
                                            onChange={e => {
                                                setCitation(e.target.value)
                                                setTodoConteudo({titulo, img, citation, paragraph})
                                            }}
                                            >

                                            </textarea>
                                            <span>Autor: <input type="text" /></span>
                                        </label> 
                                    </div>

                                    <h2>Paragrafos <span>+</span></h2>
                                    <div className='conteudo--div'>
                                        <label className='conteudo_div--paragrafo' htmlFor="">
                                            Paragrafo 1 
                                            <textarea name="" id="" cols="30" rows="10"
                                            onChange={e => {
                                                setParagraph(e.target.value)
                                                setTodoConteudo({titulo, img, citation, paragraph})
                                            }}
                                            >

                                            </textarea>
                                        </label>
                                    </div>

                                
                                <button onClick={() => {props.setConteudo(['dadada'])}}>Salvar</button> {/** Transformar em um onChange da div completa que atualiza sozinho e enviar para o objeto da pagina principal */}
                                    
                            </div>

        
    )
}