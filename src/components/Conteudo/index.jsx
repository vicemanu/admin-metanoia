import './conteudo.css'

export default function Conteudo() {
    return(
        <div className='conteudo'>
                        <label className='conteudo--title' htmlFor="">
                            Titulo1: <input type="text" name="" id="" />
                        </label>
                        <h2>Imagens <span>+</span></h2>
                        <div className='conteudo--div'>
                            <label htmlFor="">
                                <input type="file" name="" id="" />
                            </label>
                        </div>

                        <h2>Citações <span>+</span></h2>
                        <div className='conteudo--div'>
                            <label className='conteudo_div--citacao'  htmlFor="">
                                Citação 1
                                <textarea  name="" id="" cols="30" rows="10"></textarea>
                                <span>Autor: <input type="text" /></span>
                            </label> 
                        </div>

                        <h2>Paragrafos <span>+</span></h2>
                        <div className='conteudo--div'>
                            <label className='conteudo_div--paragrafo' htmlFor="">
                                Paragrafo 1 
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </label>
                        </div>
                        
                    </div>

        
    )
}