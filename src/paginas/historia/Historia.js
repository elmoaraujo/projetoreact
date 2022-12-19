import React from "react";
import "./historia.css";
import Fotodrop from "../../imagens/drop.png";
import Rodape from "../../componentes/rodape/Rodape";



export default function historia(){

  return (
    <>

<header>
        
</header>


<main>
 <article>
    <section class="section-1 container">

        <div class="action-title"> <br></br>
            <h2>Nossa História:</h2>
            <p>Somos uma organização amadora de e- Sports, fomos fundados em 16 de novembro de 2019, tendo como autor
                principal Elmo Araujo Filho, mas que hoje, após uma grande evolução é dirigida 
                por uma comissão de 4 (quatro) pessoas e já passaram quase 300 (trezentos) membros, abrangendo vários 
                lugares do país, como Espírito Santo, São Paulo, Goiás, Alagoas, Rio de Janeiro, Pará, 
                entre outros Estados. O intuito era se divertir com o jogo, mas foram surgindo 
                oportunidades que agregadas aos interesses evolutivos dos administradores, fizeram 
                com que a guilda tivesse bastante evolução no cenário, conquistando um espaço 
                importante no jogo e tendo um grande reconhecimento populacional.</p>
           
        </div> 


    </section> <br></br> <br></br> 
</article>

<article>
 
    <section class="section-3 container">
        <section class="section-2 container">
        
            <div class="cards">
    
                <div class="card">
                    <img src={Fotodrop}
                    alt=""
                    />

                    <h3>EM QUAIS JOGOS ATUAMOS?</h3>
                </div>
    
                <div class="card">
                   <img src={Fotodrop}
                    alt=""
                    />
                     <h3>QUAIS SÃO NOSSOS OBJETIVOS?</h3>
                </div>
             </div> <br></br> <br></br> <br></br> 
             
        </section>
    
        <div class="action-title">
        <p>Atualmente estamos apenas no Free Fire um dos jogos mobiles mais jogados  no mundo. Nosso objetivo é chegar em um nível competitivo alto e de qualidade. Mas temos também como objetivo crescer nas redes sociais e criar conteúdos insanos. Nosso projeto em relação à isso já se iniciou contamos com seu apoio !</p>   
        </div> 

    </section> 
 
  
</article>
</main> <br></br> <br></br> <br></br> <br></br> <br></br>


<Rodape/>
    
    </>
   )

}