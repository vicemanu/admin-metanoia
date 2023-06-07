import { useState } from 'react'
import './conteudo.css'

export default function Conteudo(props) {


        // console.log(titulo, img, citation, paragraph )

    const [todoConteudo, setTodoConteudo] = useState({titulo: '', img: '', citation: '', paragraph: ''})
    console.log(todoConteudo)
    return(

        <div className='conteudo' >

            
                                    <label className='conteudo--title' htmlFor="">
                                        Titulo {props.index + 1}: 
                                        <input type="text" name="" id="" 
                                        onChange={e => {
                                            setTodoConteudo({...todoConteudo, titulo: e.target.value})
                                        }}
                                        />
                                    </label>
                                    <h2>Imagens <span>+</span></h2>
                                    <div className='conteudo--div'>
                                        <label htmlFor="">
                                            <input type="file" name="" id=""
                                            onChange={e => {
                                                setTodoConteudo({...todoConteudo, img: e.target.value})
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
                                                setTodoConteudo({...todoConteudo, citation: e.target.value})
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
                                                setTodoConteudo({...todoConteudo, paragraph: e.target.value})
                                            }}
                                            >

                                            </textarea>
                                        </label>
                                    </div>

                                
                                <button onClick={() => {props.setConteudo(['dadada'])}}>Salvar</button> {/** Transformar em um onChange da div completa que atualiza sozinho */}
                                    
                            </div>

        
    )
}