import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const SectionSubheading = ({ children }) => (
  <span className={styles.subheading}>{children}</span>
)

SectionSubheading.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionSubheading
