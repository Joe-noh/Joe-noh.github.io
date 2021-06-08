import React from 'react'
import PropTypes from 'prop-types'

import { heading } from './style.module.css'

const SectionHeading = ({ children }) => (
  <h3 className={heading}>{children}</h3>
)

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionHeading
