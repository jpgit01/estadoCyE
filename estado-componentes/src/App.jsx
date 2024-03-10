import React from 'react'
import Registro from './componentes/Registro'
import './App.css'
import { useState } from 'react'

function App() {
  const [alert, setAlert] = useState({ error:"", texto:"", variante:"" })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <Registro alert={alert} setAlert ={setAlert}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
