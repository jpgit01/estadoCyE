import React from 'react'
import Registro from './componentes/Registro'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Crea una cuenta</h1>
              <Registro/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
