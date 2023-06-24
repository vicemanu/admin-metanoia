import Logo from '../../components/Logo'
import './login.css'

export default function Login() {
    return(
        <div className='login'>
            <form className='login--form' action="">
                <Logo/>
                <label htmlFor="email">Email:<input id='email' type="email" /></label>
                <label htmlFor="senha">Senha:<input id='senha' type="password" /></label>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
} 