import React from 'react'
import './Form.css'

const Form = () => {
  return (
      <section class="form-container">
    <form>

      <div class="input-container">
        <label for="name-input">*Nome:
          <input id="name-input" name="Nome" type="text" placeholder="Informe seu nome" required />
        </label>
      </div>
      <div class="responsive-inputs">
        <div class="input-container responsive-input">
          <label for="email-input">*E-mail:
            <input id="email-input" name="E-mail" type="text" placeholder="Informe seu email" required />
          </label>
        </div>
        <div class="input-container responsive-input">
          <label for="phone-input">*Telefone:
            <input id="phone-input" name="Telefone" type="text" placeholder="(__) ____-____" maxlength="15" required />
          </label>
        </div>
      </div>
      <div class="input-container message-container">
        <label for="message-input">*Menssagem:
          <textarea name="Mensagem" id="message-input" cols="30" rows="10" placeholder="Escreva aqui"
            required></textarea>
        </label>
      </div>
      <div class="submit-button-container">
        <input id="submit-button" class="submit-button" type="submit" value="ENVIAR" />
      </div>
    </form>
  </section>
  )
}

export default Form
