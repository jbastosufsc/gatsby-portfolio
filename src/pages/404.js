import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PaginaNaoEncontrada = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Página Não Encontrada</h1>
    <p>
      Por favor, verifique na url se a página foi digitada corretamente.
      Obrigado pela sua visita. Caso necessário entre em{" "}
      <Link to="/contato">Contato.</Link>
    </p>
  </Layout>
)

export default PaginaNaoEncontrada
