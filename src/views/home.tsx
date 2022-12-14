import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home(){

    const [saldo, setSaldo] = useState(0);

    //Carrega dados do servidor
    useEffect(() => {
        console.log("Entrooou...")
        axios.get("http://localhost:8080/api/usuarios/2/saldo")
        .then( response => {
            setSaldo( response.data );
        }).catch( error => {
            console.log( error.response );
        })
    });

    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Esse é seu sistema de finanças.</p>
            <p className="lead">Seu saldo para o mês atual é de R$ {saldo}</p>
            <hr className="my-4" />
            <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" 
                href="#/cadastro-usuarios" 
                role="button">
            <i className="fa fa-users"></i>
            Cadastrar Usuário</a>
            <a className="btn btn-danger btn-lg" 
                href="#" 
                role="button">
                <i className="fa fa-users"></i>
                Cadastrar Lançamento</a>
            </p>
      </div>
    )

}