import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import ExtLink from "../components/ext-link"

import { container, avatar, name, links } from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={container}>
      <div className={avatar}>
        <Avatar />
      </div>
      <h2 className={name}>Joe-noh</h2>
      <ul className={links}>
        <li>
          <ExtLink href="https://twitter.com/Joe_noh">Twitter</ExtLink>
        </li>
        <li>
          <ExtLink href="https://github.com/Joe-noh">GitHub</ExtLink>
        </li>
        <li>
          <ExtLink href="https://qiita.com/Joe-noh">Qiita</ExtLink>
        </li>
        <li>
          <ExtLink href="https://hex.pm/users/joe-noh">Hex</ExtLink>
        </li>
        <li>
          <ExtLink href="https://www.slideshare.net/Joe_noh">Slide</ExtLink>
        </li>
        <li>
          <ExtLink href="https://joe-noh.hatenablog.com">Blog</ExtLink>
        </li>
        <li>
          <Link to="/history/">History</Link>
        </li>
        <li>
          <Link to="/works/">Works</Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
