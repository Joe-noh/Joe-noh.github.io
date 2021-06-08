import React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Article, { ArticleHeading, Section, SectionHeading, SectionSubheading } from '../../components/article'
import ExtLink from '../../components/ext-link'

const History = () => (
  <Layout>
    <Seo title="History" />
    <Article>
      <ArticleHeading>History</ArticleHeading>
      <Section>
        <SectionHeading><ExtLink href="https://www.oyama-ct.ac.jp/">小山工業高等専門学校</ExtLink> 電子制御工学科</SectionHeading>
        <SectionSubheading>2006/4 - 2011/3</SectionSubheading>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://www.nagaokaut.ac.jp/">長岡技術科学大学</ExtLink> 電気電子情報工学課程</SectionHeading>
        <SectionSubheading>2011/4 - 2013/3</SectionSubheading>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://www.nagaokaut.ac.jp/">長岡技術科学大学</ExtLink> 工学研究科 電気電子情報工学専攻</SectionHeading>
        <SectionSubheading>2013/4 - 2014/12 (退学)</SectionSubheading>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://pepabo.com/">GMOペパボ株式会社</ExtLink></SectionHeading>
        <SectionSubheading>2015/4 -</SectionSubheading>
      </Section>
    </Article>
  </Layout>
)

export default History
