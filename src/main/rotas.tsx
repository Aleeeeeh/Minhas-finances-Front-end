import React from 'react'
import Home from '../views/home'
import Login from '../views/Login'
import CadastroUsuario from '../views/cadastroUsuarios'
import ConsultaLancamentos from '../views/consultaLancamento'
import CadastroLancamentos from '../views/cadastroLancamento'
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
                <Route path="/home" component={Home} />
                <Route path="/login"  component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route path="/consulta-lancamentos" component={ConsultaLancamentos} />
                <Route path="/cadastro-lancamentos/:idLancamento?" component={CadastroLancamentos} />{/* ? -> Pra renderizar mesmo sem parâmetro */}
            </Switch>
        </HashRouter>
    )

}
