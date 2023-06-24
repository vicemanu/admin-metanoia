import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Private from "./Private";


export default function Router() {
  return(
    <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/admin" element={<Private> <Admin/> </Private>}/>
        {/* Criar pagina do 404 não encontrado */}
    </Routes>
  )
}

