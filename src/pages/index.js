import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import ExtLink from "../components/ext-link"

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
        <li><ExtLink href="https://twitter.com/Joe_noh">Twitter</ExtLink></li>
        <li><ExtLink href="https://github.com/Joe-noh">GitHub</ExtLink></li>
        <li><ExtLink href="https://www.slideshare.net/Joe_noh">Slide</ExtLink></li>
        <li><ExtLink href="https://joe-noh.hatenablog.com">Blog</ExtLink></li>
        <li><Link to="/history/">History</Link></li>
        <li><Link to="/works/">Works</Link></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
