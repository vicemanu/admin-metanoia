
import { useEffect, useState } from 'react'
import './slide.css'
import { Link } from 'react-router-dom';

export default function Slide(props) { 


    const [btn, setBtn] = useState(0);

    function somaBtn() {
       let n = btn + 1
       if(n == 4) {
        n = 0
       }
      setBtn(n)
    }

    function subBtn() {
      let n = btn - 1
      if(n == -1) {
        n = 3
      }
      setBtn(n)
    }

    function gerarTela() {
      let element = props.artigos[btn];
      

      return(
        <section className="home--slide-home">
          <div style={{backgroundImage: `url(${element?.img})`}} className='slide_home--picture_box'>

            <div className='picture_box--btns'>
              <span className='btn1' style={{backgroundColor: btn == 0 ? 'white': ""}}></span>
              <span className='btn2' style={{backgroundColor: btn == 1 ? 'white': ""}}></span>
              <span className='btn3' style={{backgroundColor: btn == 2 ? 'white': ""}}></span>
              <span className='btn4' style={{backgroundColor: btn == 3 ? 'white': ""}}></span>
            </div>

            <div className='picture_box--box_arrow'>
              <button onClick={()=> {
                subBtn()
              }} className='box_arrow--left'>
                <i class="bi bi-caret-left-fill"></i>
                </button>
              <button onClick={()=> {
                somaBtn()
              }} className='box_arrow--rigth'>
                <i class="bi bi-caret-right-fill"></i>
                </button>
            </div>
            
          </div>
          <div className='slide-home--text_box_slide'>
            <h2 className='text_box_slide--title'>{element?.title}</h2>
            <p className='text_box_slide--text'>{element?.text}</p>
            <Link to={`/artigo/${element?.id}`} className='text_box_slide--link'>Ler mais </Link>
          </div>
        </section>
      )
      
    }
    
  
    

    return (
        <>
        {gerarTela()}
        </>
    )
}