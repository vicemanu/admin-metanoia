import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";


export default function Router() {
  return(
    <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/admin" element={<Admin/>}/>
        {/* Criar pagina do 404 não encontrado */}
    </Routes>
  )
}

