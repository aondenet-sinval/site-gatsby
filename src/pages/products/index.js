import * as React from "react"
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import { productCard, productGrid } from '../../components/layout.module.css' 
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Products = ({data}) => {
	
return (
    <Layout pageTitle="Produtos">
	<main className={productGrid}>
	{
		data.allMdx.nodes.map((node, index) =>(
		<article key={index} className={productCard}>
			<GatsbyImage
			  image={getImage(node.frontmatter.hero_image)}
			  alt={node.frontmatter.hero_image_alt}
			/>
			<h2>{node.frontmatter.title}</h2>
			<p>Fabricação: {node.frontmatter.date}</p>
			<Link to={node.frontmatter.slug}>
			Ver detalhes...
			</Link>
		</article>
		))
	}
	</main>
    </Layout>
  )
}
export const query = graphql`
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        date
        slug
        title
	hero_image {
          childImageSharp {
            gatsbyImageData(width: 240, height: 240)
          }
        }
	hero_image_alt
      }
    }
  }
}
`
export const Head = () => <Seo title="Produtos" />
export default Products
