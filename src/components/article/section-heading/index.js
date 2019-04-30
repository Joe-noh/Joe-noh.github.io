import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const SectionHeading = ({ children }) => (
  <h3 className={styles.heading}>{children}</h3>
)

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionHeading
