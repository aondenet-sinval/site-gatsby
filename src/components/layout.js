import * as React from 'react'
import styled from 'styled-components'
import Navigation from './navigation'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`
const Heading = styled.h1`
  color: rebeccapurple;
`
const SiteTitle = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)
  return (
    <Container>
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <Navigation />
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
