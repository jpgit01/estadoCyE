import React from "react"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"



function Registro() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Registro</h1>
            <SocialButton/>
           <Formulario/> 
           <Alert/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registro