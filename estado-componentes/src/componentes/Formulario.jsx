import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");


  const validarInputs = (e) => {
    //Prevenimos el comportamiento por defecto
    e.preventDefault();
    //Validación input
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      passwordconfirm === ""
    ) {
      setAlert({error: true, texto:"Debes llenar todos los campos", variante: "danger"
      });
      return;
    }

    if (password !== passwordconfirm) {
      setAlert({
        error: true,
        texto: "Las contraseñas son diferentes",
        variante: "danger"
        });
      return;
    }

    setAlert({error: false, texto:"Registro exitoso", variante:"success"});
    setNombre('');
    setEmail('');
    setPassword('');
    setPasswordconfirm('');
  };
  return (
    <Form onSubmit={validarInputs}>
      <Form.Group className="mb-3">
        <Form.Control
          onChange={(e) => setNombre(e.target.value)}
          className="mb-3"
          id="nombre"
          type="text"
          placeholder="Nombre"
        />
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3"
          id="email"
          type="email"
          placeholder="Tuemail@ejemplo.com"
        />
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3"
          id="password"
          type="password"
          placeholder="Contraseña"
        />
        <Form.Control
          onChange={(e) => setPasswordconfirm(e.target.value)}
          className="mb-3"
          id="passwordconfirm"
          type="password"
          placeholder="Confirma tu contraseña"
        />
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
