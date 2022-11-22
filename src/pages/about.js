import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from 'styled-components'
const Paragraph = styled.p`
  background-color: black;
  color: white;
`
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <Paragraph>
      Hi there! I'm the proud creator of this site, which I built with Gatsby.
    </Paragraph>
    </Layout>
  )
}

export const Head = () => <Seo title="Sobre" />

export default AboutPage
