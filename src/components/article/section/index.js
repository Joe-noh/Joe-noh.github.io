import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Section = ({ children }) => (
  <section className={styles.section}>{children}</section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
