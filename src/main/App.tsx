import React from 'react'
import Rotas from './rotas'
import Navbar from '../components/Navbar'
import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

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
