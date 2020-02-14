import React from "react"

const FormContact = () => {
  return (
    <form
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

      <p>
        <label>
          Your Name: <input type="text" name="name" id="name" required="true" />
        </label>
      </p>

      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>

      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export default FormContact
