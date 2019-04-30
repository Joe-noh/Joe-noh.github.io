import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Paragraph = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
)

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
}

export default Paragraph
