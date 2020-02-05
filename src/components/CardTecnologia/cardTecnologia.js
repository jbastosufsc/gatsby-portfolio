import React from "react"
import Img from "gatsby-image"

import "./cardTecnologia.css"

const CardTecnologia = ({ titulo, descricao, img, body }) => {
  return (
    <div className="cardBox">
      <Img className="cardBoxImg" fixed={img} />
      <div className="cardBoxTexto">
        <p>{titulo}</p>
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default CardTecnologia
