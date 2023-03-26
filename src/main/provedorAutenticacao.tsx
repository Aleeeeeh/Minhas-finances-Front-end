import React, { createContext, useState } from 'react'
import AuthService from '../app/service/authService';
//import jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";
import ApiService from '../app/apiservice';

export const AuthContext = createContext(null);
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

type props ={
    children: any;
}

export default function ProvedorAutenticacao({children}: props){

    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
    const [isAutenticado, setIsAutenticado] = useState(false);

    // Loga no sistema e seta estado de login true e passa as credenciais do usuário que está logado
    const iniciarSessao = (tokenDTO:any) =>{
        const token = tokenDTO.token;
        
        const claims = jwt_decode(token);

        const usuario = {
            id: claims.userid,
            nome: claims.nome
        }
        console.log(claims);
        ApiService.registrarToken(token);
        AuthService.logar(tokenDTO);
        setIsAutenticado(true);
        setUsuarioAutenticado(usuario);
    }

    // Encerra sessão setando como false na autenticação e nulo na variável de estado do usuário
    const encerrarSessao = () =>{
        AuthService.removerUsuarioAutenticado();
        setIsAutenticado(false);
        setUsuarioAutenticado(null);
    }

    const contexto = {
        usuarioAutenticado: usuarioAutenticado,
        isAutenticado: isAutenticado,
        iniciarSessao: iniciarSessao,
        encerrarSessao: encerrarSessao
    }

    return(
        <AuthProvider value={contexto}>
            {children}
        </AuthProvider>
    )

}
