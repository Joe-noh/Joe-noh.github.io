import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"

import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar />
      </div>
      <h2 className={styles.name}>Joe-noh</h2>
      <ul className={styles.links}>
        <li><a href="https://twitter.com/Joe_noh" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://github.com/Joe-noh" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://joe-noh.hatenablog.com" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><Link to="/page-2/">History</Link></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
