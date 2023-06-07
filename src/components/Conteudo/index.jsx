import { useState } from 'react'
import './conteudo.css'

export default function Conteudo(props) {

    const [titulo, setTitulo] = useState('')
    const [img, setImg] = useState('')
    const [citation, setCitation] = useState('')
    const [paragraph, setParagraph] = useState('')

        // console.log(titulo, img, citation, paragraph )

    const [todoConteudo, setTodoConteudo] = useState({titulo, img, citation, paragraph})
    console.log(todoConteudo)
    return(

        <div className='conteudo' >

            
                                    <label className='conteudo--title' htmlFor="">
                                        Titulo {props.index + 1}: 
                                        <input type="text" name="" id="" 
                                        onChange={e => {
                                            setTitulo(e.target.value)
                                            setTodoConteudo({titulo, img, citation, paragraph})
                                        }}
                                        />
                                    </label>
                                    <h2>Imagens <span>+</span></h2>
                                    <div className='conteudo--div'>
                                        <label htmlFor="">
                                            <input type="file" name="" id=""
                                            onChange={e => {
                                                setImg(e.target.value)
                                                setTodoConteudo({titulo, img, citation, paragraph})
                                            }}
                                             />
                                        </label>
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

                                
                                <button onClick={() => {props.setConteudo(['dadada'])}}>Salvar</button> {/** Transformar em um onChange da div completa que atualiza sozinho */}
                                    
                            </div>

        
    )
}