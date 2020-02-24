import React from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Img from "gatsby-image"

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
        <a href="https://www.linkedin.com/in/jorgebastosjr/" target="_blank">
          <FaLinkedin className="socialIcon" />
        </a>
        <a href="https://github.com/jbastosufsc" target="_blank">
          <FaGithub className="socialIcon" />
        </a>
        <a href="https://instagram.com/jorgebastos10" target="_blank">
          <FaInstagram className="socialIcon" />
        </a>
      </div>
    </section>
  )
}
