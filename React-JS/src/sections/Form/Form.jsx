import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './Form.css';

const FormComponent = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const maskPhone = (event) => {
    let phoneNumber = event.target.value;
    phoneNumber = phoneNumber.replace(/\D/g, '');
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d{1,4})/, `($1) $2`);
    if (phoneNumber.length >= 10) {
      phoneNumber = phoneNumber.replace(/(\d{4})(\d{1,4})$/, `$1-$2`);
    }
    event.target.value = phoneNumber;
  };

  return (
    <section class="form-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationName">
            <div className="input-container">
              <Form.Label>
                *Nome:
                <Form.Control required type="text" placeholder="Insira seu nome" />
                <Form.Control.Feedback>Validado</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Nome inválido</Form.Control.Feedback>
              </Form.Label>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationName">
            <div className="input-container">
              <Form.Label>
                *E-mail:
                <Form.Control required type="email" placeholder="Insira seu e-mail" />
                <Form.Control.Feedback>Validado</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">E-mail inválido</Form.Control.Feedback>
              </Form.Label>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationName">
            <div className="input-container">
              <Form.Label>
                *Telefone:
                <Form.Control
                  required
                  type="text"
                  maxLength="15"
                  placeholder="(__) ____-____"
                  onChange={maskPhone}
                />
                <Form.Control.Feedback>Validado</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Telefone inválido</Form.Control.Feedback>
              </Form.Label>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationName">
            <div className="input-container text-area">
              <Form.Label style={{ height: '200px' }}>
                *Menssagem:
                <Form.Control
                  as="textarea"
                  required
                  type="text"
                  placeholder="Escreva aqui"
                  rows="6"
                />
                <Form.Control.Feedback>Validado</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Mensagem inválida</Form.Control.Feedback>
              </Form.Label>
            </div>
          </Form.Group>
        </Form.Row>
        <div class="submit-button-container">
          <input id="submit-button" class="submit-button" type="submit" value="ENVIAR" />
        </div>
      </Form>
    </section>
  );
};

export default FormComponent;
