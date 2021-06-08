import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { article, heading, bomb } from './style.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <article className={article}>
      <h2 className={heading}>404</h2>
      <span role="img" aria-label="Bomb" className={bomb}>💣</span>
    </article>
  </Layout>
)

export default NotFoundPage
