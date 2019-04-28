import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ExtLink from '../../components/ext-link'

import styles from './style.module.css'

const History = () => (
  <Layout>
    <SEO title="History" />
    <article className={styles.article}>
      <h2 className={styles.heading}>History</h2>
      <section className={styles.section}>
        <h3 className={styles.org}><ExtLink href="https://www.oyama-ct.ac.jp/">小山工業高等専門学校</ExtLink> 電子制御工学科</h3>
        <span className={styles.duration}>2006/4 - 2011/3</span>
      </section>
      <section className={styles.section}>
        <h3 className={styles.org}><ExtLink href="https://www.nagaokaut.ac.jp/">長岡技術科学大学</ExtLink> 電気電子情報工学課程</h3>
        <span className={styles.duration}>2011/4 - 2013/3</span>
      </section>
      <section className={styles.section}>
        <h3 className={styles.org}><ExtLink href="https://www.nagaokaut.ac.jp/">長岡技術科学大学</ExtLink> 工学研究科 電気電子情報工学専攻</h3>
        <span className={styles.duration}>2013/4 - 2014/12 (退学)</span>
      </section>
      <section className={styles.section}>
        <h3 className={styles.org}><ExtLink href="https://pepabo.com/">GMOペパボ株式会社</ExtLink></h3>
        <span className={styles.duration}>2015/4 -</span>
      </section>
    </article>
  </Layout>
)

export default History
