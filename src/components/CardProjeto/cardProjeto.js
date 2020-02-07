import React from "react"
import Img from "gatsby-image"

import "./cardProjeto.css"

const cardProjeto = ({ titulo, atividades, url, imagem }) => {
  return (
    <li>
      <Img fixed={imagem} />
      <h3>{titulo}</h3>
      <p>{atividades}</p>
      <p>{url}</p>
    </li>
  )
}

export default cardProjeto
