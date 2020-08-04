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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
                <Form.Control required type="number" placeholder="(__) ____-____" />
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
    // <section class="form-container">
    //   <form>
    //     <div class="input-container">
    //       <label for="name-input">
    //         *Nome:
    //         <input
    //           id="name-input"
    //           name="Nome"
    //           type="text"
    //           placeholder="Informe seu nome"
    //           required
    //         />
    //       </label>
    //     </div>
    //     <div class="responsive-inputs">
    //       <div class="input-container responsive-input">
    //         <label for="email-input">
    //           *E-mail:
    //           <input
    //             id="email-input"
    //             name="E-mail"
    //             type="text"
    //             placeholder="Informe seu email"
    //             required
    //           />
    //         </label>
    //       </div>
    //       <div class="input-container responsive-input">
    //         <label for="phone-input">
    //           *Telefone:
    //           <input
    //             id="phone-input"
    //             name="Telefone"
    //             type="text"
    //             placeholder="(__) ____-____"
    //             maxlength="15"
    //             required
    //           />
    //         </label>
    //       </div>
    //     </div>
    //     <div class="input-container message-container">
    //       <label for="message-input">
    //         *Menssagem:
    //         <textarea
    //           name="Mensagem"
    //           id="message-input"
    //           cols="30"
    //           rows="10"
    //           placeholder="Escreva aqui"
    //           required
    //         ></textarea>
    //       </label>
    //     </div>
    //   </form>
    // </section>
  );
};

export default FormComponent;
