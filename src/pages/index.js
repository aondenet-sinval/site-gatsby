import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Página Inicial" />

export default IndexPage
