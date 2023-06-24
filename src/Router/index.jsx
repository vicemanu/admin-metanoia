import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Private from "./Private";
import Add from "../components/Add";
import Menu from "../components/Menu"


export default function Router() {
  return(
    <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/admin" element={<Private><Menu/><Admin/></Private>}/>

        {/* Criar pagina do 404 não encontrado */}
    </Routes>
  )
}

