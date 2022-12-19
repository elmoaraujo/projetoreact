
import React from "react";
import "./inicial.css";
import FotoMASCOTE from "../../imagens/MASCOTE.png";
import FotoGUILDA from "../../imagens/GUILDA.jpeg";
import FotoREDESSOCIAIS from "../../imagens/REDESSOCIAIS.png";
import FotoGAMER from "../../imagens/GAMER.png";
import FotoFREEFIRE from "../../imagens/FREEFIRE.jpg";




export default function inicial(){

  return (
<> 

<main>
<article>
   
   <section class="section-1 container">

      <div class="ebook">
          <img src={FotoGUILDA}
           alt=""
           />
      </div>

      <div class="action-title">
          <h2>Somos uma organização amadora de E-sports, fomos fundados em 16 de novembro de 2019. Conheçam um pouco mais sobre nós.</h2>
          <a class="button" href="HISTORIA.html">leia mais</a>
      </div>

      </section>
      </article>

   <article>
   
   <section class="section-2 container"> <br></br><br></br>

      <h2>INTERAJA COM A NOSSA ORGANIZAÇÃO </h2> <br></br><br></br>
      <div class="cards2">

          <div class="card">
              <img src={FotoMASCOTE}
               alt=""
               />

              <a href="https://docs.google.com/forms/d/e/1FAIpQLScuyNNVurqIm-u9zZSPD9qdBibjSNIQxWHE3upheI3OeSxplg/viewform"> DOG TAG</a>
          </div>

          <div class="card">
              <img src= {FotoREDESSOCIAIS}
              alt=""
              />
              <a href="https://linktr.ee/lionseliteof">REDES SOCIAIS</a>
          </div>

          <div class="card">
              <img src={FotoGAMER}
              alt=""
              />

              <a href="https://lionseliteof.netlify.app/jogo%20fruit%20lions/"> GAMER</a>
          </div>

      </div>
  </section>
  </article>


  <article>

  <section class="section-1 container">

  <div class="ebook">
      <img src= {FotoFREEFIRE}
      alt=""
      />
  </div>

  <div class="action-title">
      <h2>Free Fire é um jogo de battle royale onde o jogador deve ser o ultimo sobrevivente. Nossa organização Lions Elite está recrutando os melhores jogadores do cenário competitivo, venha participar e fazer parte da nossa organização.</h2>
      <a class="button" href="https://docs.google.com/forms/d/e/1FAIpQLSeTc1I0ZSYV53RDk3lOtGPVqD0xDSzSXbRJgxFMsVPOlF_hHw/viewform">Faça parte</a>
  </div>

  </section>
  </article> 
  </main> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  

  </>

   )

}
