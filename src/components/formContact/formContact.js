import React from "react"

const FormContact = () => {
  return (
    <form
      name="contact"
      action="/"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <p>
        <label>
          Your Name: <input type="text" name="name" />
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
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default FormContact
