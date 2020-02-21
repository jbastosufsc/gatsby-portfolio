import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

import "./contactInfo.css"

export default function ContactInfo() {
  return (
    <section className="sectionInfo">
      <div className="blockInfo">
        <h4>Endereço</h4>
        <p>Lauro Linhares, 1921. Trindade, SC - Brasil</p>
      </div>
      <div className="blockInfo">
        <h4>Telefone</h4> <p>+55 48 999-208-659</p>
      </div>
      <div className="blockInfo">
        <h4>Email</h4>
        <p>jbastos.ufsc@gmail.com</p>
      </div>
      <div className="blockInfo">
        <h4>Social</h4>
        <FaLinkedin className="socialIcon" />
        <FaGithub className="socialIcon" />
        <FaInstagram className="socialIcon" />
      </div>
    </section>
  )
}
