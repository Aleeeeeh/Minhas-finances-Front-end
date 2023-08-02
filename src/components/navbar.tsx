import React, { useContext } from 'react'
import NavBarItem from './navbaritem'
import { AuthContext } from '../main/provedorAutenticacao'

export default function Navbar(){
    const { isAutenticado, encerrarSessao }:any = useContext(AuthContext);

    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/home" className="navbar-brand">Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem render={isAutenticado} href="/home" label="Home" />
                        <NavBarItem render={isAutenticado} href="/cadastro-usuarios" label="Usuários" />
                        <NavBarItem render={isAutenticado} href="/consulta-lancamentos" label="Lançamentos" />
                        <NavBarItem render={isAutenticado} onClick={encerrarSessao} href="/login" label="Sair" />
                    </ul>
                </div>
            </div>
        </div>
    )

}
