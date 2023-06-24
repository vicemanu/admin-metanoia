import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Private from "./Private";
import Add from "../pages/NewArticle";
import Menu from "../components/Menu"
import NewAticle from "../pages/NewArticle";


export default function Router() {
  return(
    <Routes>
        <Route path="/" element={<Login/>}  />
        <Route path="/admin" element={<Private><Menu/><Admin/></Private>}/>
        <Route path="/admin/new-article" element={<Private><Menu/><NewAticle/></Private>}/>
        {/* Criar pagina do 404 não encontrado */}
    </Routes>
  )
}

