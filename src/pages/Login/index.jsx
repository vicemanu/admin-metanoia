import Logo from '../../components/Logo'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import './login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    async function handleLogin(e) {
        e.preventDefault();
  
        if(email !== '' && password !== '') {
          await signInWithEmailAndPassword(auth, email, password)
          .then(()=> {
            navigate('/admin/home', {replace: true})
          }) 
          .catch(()=> {
            console.log("ERR  O PARA FAZER LOGIN ")
          })
  
        }else {
          alert("Preencha todos os campos! ")
        }
      }

    return(
        <div className='login'>
            <form className='login--form' onSubmit={handleLogin}>
                <Logo/>
                <label htmlFor="email">Email:<input id='email' type="email" value={email}
          onChange={e => setEmail(e.target.value)} /></label>
                <label htmlFor="senha">Senha:<input id='senha' type="password" value={password}
          onChange={e => setPassword(e.target.value)} /></label>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
} 