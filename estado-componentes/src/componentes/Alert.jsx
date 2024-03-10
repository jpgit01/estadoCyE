import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertFunction({error, texto, variante}) {

    return (
      <Alert variant={variante}>
        <Alert.Heading><h5>{texto}</h5></Alert.Heading>
      </Alert>
    );
  }

export default AlertFunction;