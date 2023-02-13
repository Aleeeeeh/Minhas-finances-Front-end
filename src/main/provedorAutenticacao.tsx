import React, { createContext, useState } from 'react'
import AuthService from '../app/service/authService';

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
    const iniciarSessao = (usuario:any) =>{
        AuthService.logar(usuario);
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
