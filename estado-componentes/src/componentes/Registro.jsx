import React from "react"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"
import AlertFunction from "./Alert"



function Registro() {

  return (
    <>
      <div className="container">
        <div className="row bg-white p-5 rounded">
          <div className="col-md-12">
            <h1>Crea una cuenta</h1>
            <SocialButton icon="fa-brands fa-facebook me-3 mt-3" />
            <SocialButton  icon="fa-brands fa-github me-3 mt-3" />
            <SocialButton icon="fa-brands fa-linkedin-in me-3 mt-3" />
            <h3 className="mt-3">O usa tu email para registrarte</h3>
           <Formulario/> 
           <AlertFunction/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registro