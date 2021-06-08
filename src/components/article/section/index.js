import React from 'react'
import PropTypes from 'prop-types'

import { section } from './style.module.css'

const Section = ({ children }) => (
  <section className={section}>{children}</section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
