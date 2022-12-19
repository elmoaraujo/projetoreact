import "./menu.css";
import {Link} from "react-router-dom";



export default function Menu() {

    return (
        <>


<nav id="menu-h">
            <ul>
                <li><a href="#">Home</a></li>
    
                <li><a href="https://www.ffesportsbr.com.br/fftimes/">Times</a></li>
                
                <Link to="/sobre">
                <li>sobre</li>
                </Link>
                

                <Link to="/musica">
                <li>Musica</li>
                </Link>

                <li><a href="https://linktr.ee/lionseliteof">Contato</a></li>

                <li><a href="REGRAS.html">Regras e Diretrizes</a></li>

                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScuyNNVurqIm-u9zZSPD9qdBibjSNIQxWHE3upheI3OeSxplg/viewform">DogTag</a></li>
                
                <li><a href="login">Entrar</a></li>
            </ul>
        </nav>








           
        </>
    )
}
