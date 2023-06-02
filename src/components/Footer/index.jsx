import Redes from '../Redes'
import './footer.css'

export default function Footer() {


    return (
        <footer className='footer'>
            <img className='footer--img' src="https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg" alt="" />
            <div className='footer--box_redes'>
                <h3>Redes Sociais</h3>
                <div>
                    <Redes/>
                </div>
            </div>
            <div className='footer--box_direitos'>
                <h4>Direito de Imagem</h4>
                <a target='_blank' href="https://pixabay.com/">pixabay.com</a>
            </div>
            <p className='footer--meu_direito'>© <a target='_blank' href="https://victor-mielke-portfolio.vercel.app/">Victor Mielke</a> 2023</p> 
        </footer>
    )
}