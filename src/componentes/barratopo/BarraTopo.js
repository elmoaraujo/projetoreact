import "./barratopo.css";
import FotoLogo from "../../imagens/LOGO.png";
import {Link} from "react-router-dom";
import { FcHome } from 'react-icons/fc';
import { FcInfo } from 'react-icons/fc';
import { VscFilePdf} from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';
import { FcMusic } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';



export default function BarraTopo() {

    return (
        <>


            <div className= "topo">


            <div className="topoEsquerda"></div>


            <div className="topoCentro">
                <ul className="topoLista">

                    <Link to="/">
                    <li className="topoListaItem"><FcHome/></li>
                    </Link>

                    <Link to="/historia">
                    <li className="topoListaItem"><FcReading/></li>
                    </Link>

                    <Link to="/sobre">
                    <li className="topoListaItem"><FcInfo/></li>
                    </Link>

                    <Link to="/musica">
                    <li className="topoListaItem"><FcMusic/></li>
                    </Link>

                    <Link to="/regras">
                    <li className="topoListaItem"><VscFilePdf/></li>
                    </Link>

                   
                    
                </ul>
            </div>

            <div className="topoDireita">
                <img
                    className="topImg"
                    src={FotoLogo} 
                    alt=""
                />

                     <Link to="/login">
                    <li className="topoListaItem"><FiLogOut/></li>
                    </Link>
            </div>

    


          </div>
        </>
    )
}
