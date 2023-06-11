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

        console.log(props.conteudo)
    }

    // function addParagraph(e) {
    //     e.preventDefault()
    //     setParagraph([...paragraph, ""])
    // }

    // function handleChangeParagraph(e, index) {
    //     paragraph[index] = e.target.value
    //     setParagraph([...paragraph])
    //     setTodoConteudo({titulo, img, citation, paragraph, autor})
    // }

    // function addCitation(e) {
    //     e.preventDefault()
    //     setCitation([...citation, ""])
    //     setAutor([...autor, ""])
    // }

    // function handleChangeCitation(e, index) {
    //     citation[index] = e.target.value
    //     setCitation([...citation])
    //     setTodoConteudo({titulo, img, citation, paragraph, autor})
    // }

    // function handleChangeAutor(e, index) {
    //     autor[index] = e.target.value
    //     setAutor([...autor])
    //     setTodoConteudo({titulo, img, citation, paragraph, autor})
    // }
    


    return(

        <div className='conteudo'>
            
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
{/* 
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
                                        
                                    </div> */}

                                 
                                
                            </div>

        
    )
}