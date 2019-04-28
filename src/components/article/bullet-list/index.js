import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const BulletList = ({ children }) => (
  <ul className={styles.list}>{children}</ul>
)

BulletList.propTypes = {
  children: PropTypes.node.isRequired
}

export default BulletList
