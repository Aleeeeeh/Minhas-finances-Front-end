import React from 'react'
import Rotas from './rotas'
import Navbar from '../components/navbar'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

export default function App(){

  return(
      <>
        <Navbar />
        <div className="container"> 
          <Rotas />
        </div>
      </>
  )
  
}
