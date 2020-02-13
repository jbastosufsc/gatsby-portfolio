import React from "react"
import Img from "gatsby-image"
import { MdLaunch } from "react-icons/md"
//import { FaGithub } from "react-icons/fa"

import "./cardProjeto.css"

const cardProjeto = ({ titulo, atividades, url, imagem }) => {
  return (
    <li>
      {{ url } && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <MdLaunch />
        </a>
      )}

      <h3>{titulo}</h3>
      <Img fixed={imagem} />
      <p>{atividades}</p>
      <p>{url}</p>
    </li>
  )
}

export default cardProjeto
