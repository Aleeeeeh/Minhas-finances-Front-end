import React, { useContext } from 'react'
import Home from '../views/home'
import Login from '../views/Login'
import CadastroUsuario from '../views/cadastroUsuarios'
import ConsultaLancamentos from '../views/consultaLancamento'
import CadastroLancamentos from '../views/cadastroLancamento'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import { AuthContext } from '../main/provedorAutenticacao'

{/* 
    HashRouter é o que cria as rotas, ele coloca um # barra e o nome da rota de acesso a view.
    Switch é similar ao switch case do js.
    Route onde definimos a rota e a view(Componente) que será renderizado.
*/}
/*Isso aqui é para quando o navbar fica disponível mesmo sem estar logado ai não deixaria usar menus 
como lançamento e home que deve ser usado apenas se estiver logado.*/

function RotaAutenticada({ component: Component,...props }:any){
    const { isAutenticado }:any = useContext(AuthContext);

    return (
        <Route {...props} render={ (componentProps) => {
            if(isAutenticado){
                return(
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ { pathname: '/login', state: { from: componentProps.location } } } /> 
                )  
            }
        }} />
    )
}

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login"  component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />

                <RotaAutenticada path="/home" component={Home} />
                <RotaAutenticada path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <RotaAutenticada path="/cadastro-lancamentos/:idLancamento?" component={CadastroLancamentos} />
                {/* ? -> Pra renderizar mesmo sem parâmetro */}
            </Switch>
        </HashRouter>
    )

}
