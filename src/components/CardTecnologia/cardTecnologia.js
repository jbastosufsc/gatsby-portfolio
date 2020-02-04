import React from "react"
import Img from "gatsby-image"

const CardTecnologia = ({ titulo, descricao, img }) => {
  return (
    <div>
      <p>{titulo}</p>
      <p>{descricao}</p>
      <Img fixed={img} />
    </div>
  )
}

export default CardTecnologia
