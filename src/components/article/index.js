import React from 'react'
import PropTypes from 'prop-types'

import ArticleHeading from './article-heading'
import Section from './section'
import SectionHeading from './section-heading'
import SectionSubheading from './section-subheading'
import Paragraph from './paragraph'
import BulletList from './bullet-list'

import { article } from './style.module.css'

const Article = ({ children }) => (
  <article className={article}>{children}</article>
)

Article.propTypes = {
  children: PropTypes.node.isRequired
}

export default Article

export { ArticleHeading, Section, SectionHeading, SectionSubheading, Paragraph, BulletList }
