import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Article, { ArticleHeading, Section, SectionHeading, SectionSubheading, Paragraph, BulletList } from '../../components/article'
import ExtLink from '../../components/ext-link'

const Works = () => (
  <Layout>
    <SEO title="Works" />
    <Article>
      <ArticleHeading>Works</ArticleHeading>
      <Section>
        <SectionHeading><ExtLink href="https://award.shop-pro.jp/">カラーミーショップ大賞特設サイト</ExtLink></SectionHeading>
        <SectionSubheading>2016/1 - 2016/5</SectionSubheading>
        <Paragraph>カラーミーショップ大賞2016への応募、ノミネートショップ発表、投票、受賞者発表などを行うサイトの実装を担当。Rails製。</Paragraph>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://shop-pro.jp/newcart/">新しいショッピングカート</ExtLink></SectionHeading>
        <SectionSubheading>2016/3 - 2016/5</SectionSubheading>
        <Paragraph>カートASP カラーミーショップのカートをSPA化する、新しいショッピングカートプロジェクトの開発に従事。コンビニ決済の導入を行った。主な技術スタックは</Paragraph>
        <BulletList>
          <li>AngularJS 1.x</li>
          <li>Ruby on Rails</li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading>GMOペパボ 新卒エンジニア研修</SectionHeading>
        <SectionSubheading>2016/6 - 2016/12</SectionSubheading>
        <Paragraph>2016年入社の新卒エンジニアを対象に研修を企画、実施。</Paragraph>
        <BulletList>
          <li><ExtLink href="https://tech.pepabo.com/2016/10/18/engineer-training-2016/">GMOペパボの新卒エンジニア研修の様子 & テキストを公開します</ExtLink></li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://shop-pro.jp/newcart/">新しいショッピングカート</ExtLink></SectionHeading>
        <SectionSubheading>2016/12 - 2017/6</SectionSubheading>
        <Paragraph>同上。</Paragraph>
        <BulletList>
          <li>Amazon Payの導入</li>
          <li>クーポン機能の開発</li>
          <li>PayPalの導入</li>
        </BulletList>
        <Paragraph>のフロントエンドを中心に担当。</Paragraph>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://colorme-repeat.jp/">カラーミーリピート</ExtLink></SectionHeading>
        <SectionSubheading>2017/6 - 2018/6</SectionSubheading>
        <Paragraph>定期販売支援サービス カラーミーリピートのフロントエンド開発を担当。</Paragraph>
        <BulletList>
          <li>Vue.js</li>
          <li>Swagger 2.0</li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://suzuri.jp/">SUZURI</ExtLink></SectionHeading>
        <SectionSubheading>2018/7 -</SectionSubheading>
        <Paragraph>SUZURIのiOSアプリ以外の開発全般を担当。アイテム追加や機能改善、単発のイベントLPフロントエンド実装、工場追加等を実施。Rails製。</Paragraph>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://suzuri.jp/">Canvath</ExtLink></SectionHeading>
        <SectionSubheading>2018/7 -</SectionSubheading>
        <Paragraph>オリジナルグッズ作成サービス Canvathの開発全般を担当。アイテム追加等を実施。Rails製。</Paragraph>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://people.suzuri.jp/">SUZURI People</ExtLink></SectionHeading>
        <SectionSubheading>2018/8 - 2019/7</SectionSubheading>
        <Paragraph>クリエイター支援サービス SUZURI Peopleの開発をフロントエンド中心に担当。主な技術スタックは</Paragraph>
        <BulletList>
          <li>Nuxt.js</li>
          <li>TypeScript</li>
          <li>Ruby on Rails 5.x</li>
        </BulletList>
      </Section>
    </Article>

    <Article>
      <ArticleHeading>Hobby Projects</ArticleHeading>
      <Section>
        <SectionHeading>ニポポタマス</SectionHeading>
        <SectionSubheading>2016/9 -</SectionSubheading>
        <Paragraph>開発合宿でつくった社内向けの日報投稿サービス。</Paragraph>
        <BulletList>
          <li><ExtLink href="https://joe-noh.hatenablog.com/entry/2017/02/23/001807">ブログ記事</ExtLink></li>
        </BulletList>
        <Paragraph>技術スタックは以下のように好き放題やった。</Paragraph>
        <BulletList>
          <li>バックエンドAPI（GraphQL）にElixir/Phoenix</li>
          <li>フロントエンドにVue.js</li>
          <li>Slack OAuthのコールバックを受けるサーバにGolang/Echo</li>
          <li>管理画面にLaravel</li>
          <li>プロビジョニングにitamae</li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://surisuri.ninja/">SUZURI Lite</ExtLink></SectionHeading>
        <SectionSubheading>2018/7</SectionSubheading>
        <Paragraph>dev.toに影響を受けてキャッシュ戦略等に興味を持っていた頃の趣味プロジェクト。CDNエッジキャッシュやService Workerなどを利用してどれだけ速いサイトを作れるか検証した。Herokuのdynoが寝ていると遅いが、一度CDNのキャッシュに載ればそれなりに速くできた。Nuxt.jsを使用。</Paragraph>
        <BulletList>
          <li><ExtLink href="https://joe-noh.hatenablog.com/entry/2018/11/04/185145">ブログ記事</ExtLink></li>
          <li><ExtLink href="https://github.com/Joe-noh/suzuri">リポジトリ</ExtLink></li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://lild.app/">LILD</ExtLink></SectionHeading>
        <SectionSubheading>2019/2 -</SectionSubheading>
        <Paragraph>同僚のデザイナーがiOSアプリを作り始めたことに刺激を受け、Flutterで夢を記録するモバイルアプリの開発を始めたが、気づいたらWebをやっていた。</Paragraph>
        <BulletList>
          <li><ExtLink href="https://github.com/Joe-noh/LILD-web">リポジトリ（フロントエンド）</ExtLink></li>
          <li><ExtLink href="https://github.com/Joe-noh/LILD-api">リポジトリ（バックエンド）</ExtLink></li>
        </BulletList>
        <Paragraph>主な技術スタックは以下。</Paragraph>
        <BulletList>
          <li>Elixir/Phoenix</li>
          <li>Nuxt.js</li>
          <li>Firebase Authentication</li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://joe-noh.github.io/">joe-noh.github.io</ExtLink></SectionHeading>
        <SectionSubheading>2019/4 -</SectionSubheading>
        <Paragraph>このページ。平成も終わるので半生を振り返った。Gatsby on GitHub Pages。</Paragraph>
        <BulletList>
          <li><ExtLink href="https://github.com/Joe-noh/Joe-noh.github.io">リポジトリ</ExtLink></li>
        </BulletList>
      </Section>
      <Section>
        <SectionHeading><ExtLink href="https://bolg.in/">BOLG</ExtLink></SectionHeading>
        <SectionSubheading>2020/1 -</SectionSubheading>
        <Paragraph>日記を書くためにつくったブログサービス。現在はクローズドβということにしてユーザは自分ひとり。採用技術や工夫ポイントは以下のブログ記事を参照のこと。</Paragraph>
        <BulletList>
          <li><ExtLink href="https://joe-noh.hatenablog.com/entry/2020/05/03/194307">ブログ記事</ExtLink></li>
        </BulletList>
      </Section>
    </Article>
  </Layout>
)

export default Works
