import React from 'react'
import Login from '../views/Login'
import CadastroUsuario from '../views/cadastroUsuarios'
import { Route, Switch, HashRouter } from 'react-router-dom'

{/* 
    HashRouter é o que cria as rotas, ele coloca um # barra e o nome da rota de acesso a view.
    Switch é similar ao switch case do js.
    Route onde definimos a rota e a view(Componente) que será renderizado.
*/}

export default function Rotas(){

    return(
        <HashRouter>
            <Switch>
                <Route path="/login"  component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    )

}
