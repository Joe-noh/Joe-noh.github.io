import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const ArticleHeading = ({ children }) => (
  <h3 className={styles.heading}>{children}</h3>
)

ArticleHeading.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleHeading
