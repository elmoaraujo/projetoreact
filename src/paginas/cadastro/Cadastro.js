import React from "react"
import "./cadastro.css"
import { useState } from "react";



export default function Cadastro(){

  const displayMsg = () =>{
 setMensagem(!mensagem);
  }

  const [email, setEmail] = useState ("")
  const [mensagem, setMensagem] = useState (false)

  const [senha, setSenha] = useState ("")

  return (
    <>

    <div className ="CaixaMaior"> 
      <div className = "CaixaInterior">

      <label>Email : </label>
        <input 
        type="email"
        value={email}
        onChange={(event) => {
          setEmail (event.target.value);}} />

        <label>Senha : </label>
        <input type="password" 
        value={senha}
        onChange={(event) => {
          setSenha (event.target.value);}} />

        <button onClick={displayMsg}> cadastrar</button>

        <p>{mensagem?`conta criada no ${email}`:" "}</p>

      </div>

    </div>
    </>
   )
}
