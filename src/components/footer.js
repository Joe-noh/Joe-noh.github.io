import React from 'react'

const Footer = () => {
  const year = (new Date()).getFullYear()

  return (
    <footer>
      &copy; {year}, Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
    </footer>
  )
}

export default Footer
