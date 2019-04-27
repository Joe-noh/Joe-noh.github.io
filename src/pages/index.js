import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"

import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="center">
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
