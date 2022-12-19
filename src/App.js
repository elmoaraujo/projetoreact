
import Rodape from "./componentes/rodape/Rodape";
import Inicial from "./paginas/inicial/inicial";
import Historia from "./paginas/historia/Historia";
import Login from "./paginas/teladelogin/Login";
import Musica from "./paginas/musica/Musica";
import Barratopo from "./componentes/barratopo/BarraTopo";
import Regras from"./paginas/regras/Regras";
import Sobre from "./paginas/sobre/Sobre";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Cadastro from "./paginas/cadastro/Cadastro";





export default function App(){

  return (
    <>

        <Router>

        
        <Rodape/>
        <Barratopo/>
        

        <Routes>

          
        <Route exact path="/" element={<Inicial />} />
        <Route exact path="/sobre" element={<Sobre/>} />
        <Route exact path="/historia" element={<Historia />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/musica" element={<Musica />} />
        <Route exact path="/regras" element={<Regras />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        



        </Routes>
        </Router>
    </>

   )
}
