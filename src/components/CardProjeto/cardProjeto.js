import React from "react"
import Img from "gatsby-image"

import "./cardProjeto.css"

const cardProjeto = ({ titulo, atividades, url, imagem }) => {
  return (
    <li>
      <h3>{titulo}</h3>
      <Img fixed={imagem} />
      <p>{atividades}</p>
      <p>{url}</p>
    </li>
  )
}

export default cardProjeto
