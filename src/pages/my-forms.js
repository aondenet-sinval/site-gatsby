import * as React from 'react'
import Layout from '../components/layout'
import FormProducts from '../components/cadastros'
import FormLogin from '../components/login'
import Seo from '../components/seo'

const MyForms = () => {
  return (
    <Layout pageTitle="Cadastros">
   <FormProducts />
    <FormLogin />
    </Layout>
  )
}

export const Head = () => <Seo title="Cadastros" />

export default MyForms
