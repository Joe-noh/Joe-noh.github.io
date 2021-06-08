import React from 'react'
import PropTypes from 'prop-types'

import { list } from './style.module.css'

const BulletList = ({ children }) => (
  <ul className={list}>{children}</ul>
)

BulletList.propTypes = {
  children: PropTypes.node.isRequired
}

export default BulletList
