import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styles from './style.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <article className={styles.article}>
      <h2 className={styles.heading}>404</h2>
      <span role="img" aria-label="Bomb" className={styles.bomb}>💣</span>
    </article>
  </Layout>
)

export default NotFoundPage
