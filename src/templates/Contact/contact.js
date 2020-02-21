import React from "react"
import Layout from "../../components/layout"
import FormContact from "../../components/FormContact/formContact"
import ContactInfo from "../../components/ContactInfo/contactInfo"
import "./contact.css"

export default () => {
  return (
    <Layout>
      <div id="templateContact">
        <h2>Estou ansioso para construirmos algo juntos!</h2>
        <div className="wrapContact">
          <FormContact />
          <ContactInfo />
        </div>
      </div>
    </Layout>
  )
}
