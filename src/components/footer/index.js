import React from 'react'
import { Link } from 'gatsby'
import ExtLink from '../ext-link'

import { footer, text } from './style.module.css'

const Footer = () => {
  const year = (new Date()).getFullYear()

  return (
    <footer className={footer}>
      <h1 className={text}><Link to="/">joe-noh.github.io</Link> &copy; {year}</h1>
      <span className={text}>Built with <ExtLink href="https://www.gatsbyjs.org">Gatsby</ExtLink></span>
    </footer>
  )
}

export default Footer
