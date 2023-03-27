import React from "react";
import { useHistory } from "react-router-dom";

export default function LandingPage(){

   const history = useHistory();

   const goToHome = () =>{
      history.push("/home");
   }

   return(
      <div className="container text-center">
         <h2>Bem vindo ao sistema minhas finanças</h2>
         Este é seu sistema para controle de finanças pessoais, clique no botão abaixo para acessar o sistema: <br/><br/>
         <div className="offset-md-4 col-md-4">
            <button style={{ width: '100%' }} 
                  onClick={goToHome}
                  className="btn btn-success">
               <i className="pi pi-sign-in"></i> Acessar
            </button>
         </div>
      </div>
   )
    
}