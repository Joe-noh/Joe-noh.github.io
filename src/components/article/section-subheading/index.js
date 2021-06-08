import React from 'react'
import PropTypes from 'prop-types'

import { subheading } from './style.module.css'

const SectionSubheading = ({ children }) => (
  <span className={subheading}>{children}</span>
)

SectionSubheading.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionSubheading
