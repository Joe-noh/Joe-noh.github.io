import React from 'react'
import PropTypes from 'prop-types'

import { heading } from './style.module.css'

const ArticleHeading = ({ children }) => (
  <h3 className={heading}>{children}</h3>
)

ArticleHeading.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleHeading
