import React from 'react'
import Rotas from './rotas'
import Navbar from '../components/Navbar'
import 'toastr/build/toastr.min.js'
import AuthService from '../app/service/authService'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

export default function App(){
  //Quando logar fazer identificar o usuário para que seja renderizado a NAVBAR
  const usuarioAutenticado = AuthService.isUsuarioAutenticado();

  return(
      <>
        {
          usuarioAutenticado ?
          (
            <Navbar />
          ):
          (
            <div></div>
          )
        }
        
        <div className="container"> 
          <Rotas />
        </div>
      </>
  )
  
}
