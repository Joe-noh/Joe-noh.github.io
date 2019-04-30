import React from 'react'
import PropTypes from 'prop-types'

const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
)

ExtLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ExtLink
