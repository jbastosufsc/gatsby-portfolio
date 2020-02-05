import React from "react"
import Img from "gatsby-image"

import "./cardTecnologia.css"

const CardTecnologia = ({ titulo, descricao, image, body }) => {
  return (
    <div className="cardBox">
      <Img className="cardBoxImg" fixed={image} />
      <div className="cardBoxTexto">
        <p>{titulo}</p>
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default CardTecnologia
