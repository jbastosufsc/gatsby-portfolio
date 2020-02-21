import React from "react"

import "./formContact.css"

const FormContact = () => {
  return (
    <section className="sectionForm">
      <form
        className="contactForm"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>

        <div className="wrapInput">
          <label>Nome: </label>
          <input
            className="inputName"
            type="text"
            name="name"
            id="name"
            required="{true}"
          />
        </div>

        <div className="wrapInput">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <div className="wrapInput">
          <label>Mensagem:</label>
          <textarea name="message"></textarea>
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default FormContact
