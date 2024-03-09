import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");

  const [error, setError] = useState(false)

  const validarInput = (e) => {
    //Prevenimos el comportamiento por defecto
    e.preventDefault()
    //Validación input
    if(nombre === '') {
    setError(true)
    return
    }
    //Eliminar mensaje de error
    setError(false)
    }
    


  return (
    <Form  onSubmit={validarInput}>
      <Form.Group className="mb-3">
        <Form.Control onChange={(e) => setNombre(e.target.value)} className='mb-3' id='nombre' type="text" placeholder="Nombre" />
        <Form.Control onChange={(e) => setEmail(e.target.value)} className='mb-3' id='email' type="email" placeholder="Tuemail@ejemplo.com" />
        <Form.Control onChange={(e) => setPassword(e.target.value)} className='mb-3' id='password' type="password" placeholder="Contraseña" />
        <Form.Control onChange={(e) => setPasswordconfirm(e.target.value)} className='mb-3' id='passwordconfirm' type="password" placeholder="Confirma tu contraseña" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="success" size="lg" type="submit">
        Registrarse
      </Button>
    </div>
    </Form>
  );
}

export default Formulario;