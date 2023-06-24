import Logo from '../../components/Logo'
import './login.css'

export default function Login() {
    return(
        <div className='login'>
            <form className='login--form' action="">
                <Logo/>
                <label htmlFor="">Email:<input type="email" /></label>
                <label htmlFor="">Senha:<input type="password" /></label>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}