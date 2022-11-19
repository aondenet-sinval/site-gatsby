import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProductPost = ({data, children}) => {
	const values = data.mdx.frontmatter
	const image = getImage(data.mdx.frontmatter.hero_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
		<GatsbyImage
		image={image}
		alt={values.hero_image_alt}
		/>
		<p>{values.title}.</p>
		<p>Data: {values.date}</p>
		<p>Image crédito: {values.hero_image_credit_text}</p>
		<p>Info: {values.descricao}</p>
		{children}
		</Layout>
	)
}

export const query = graphql `
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      date(formatString: "MMMM D, YYYY")
      hero_image {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      title
      descricao
    }
  }
}
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />
export default ProductPost
