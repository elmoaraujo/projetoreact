import "./areapostagem.css";
import Postagem from "../postagem/Postagem";
import fotoPost1 from "../../imagens/elmo.png"
import fotoPost2 from "../../imagens/lucas.png"

export default function Areapostagem() {


       let postagem1 ={"info": "23 anos",
                       "titulo": "ELMO ARAUJO FILHO",
                       "descrição" : "Lider da organização LionsElite E-sports",
                       "foto" : fotoPost1 }

        let postagem2 ={"info": "23 anos",
                       "titulo": "JOSÉ LUCAS BISPO DOS SANTOS",
                       "descrição" : "Lider interino da organização LionsElite E-sports",
                       "foto" : fotoPost2 }
        
        
         return (
        
        <>

            <div className = "posts">

            <Postagem post={postagem1}/>
            <Postagem post={postagem2}/>

            </div>
                    
        </>
    )
}
