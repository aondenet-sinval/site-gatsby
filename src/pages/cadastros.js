import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const FormLogin = () => {
  return(<form>
	Username: <input type="text" />
	Senha: <input type="password" />
	<button type="submit">Entrar</button>
	</form>
	)
}

const FormProducts = () => {
  return(<form>
        Título: <input type="text" name="title" /><br />
	Código: <input type="text" name="codigo" /><br />
	Descrição: <input type="text" name="descricao" /><br />
	Preço: <input type="text" name="preco" /><br />
	Lançamento: <input type="text" name="lancamento" /><br />
        <button type="submit">Cadastrar</button>
        </form>
    	)
  }

const PostForms = () => {
  return (
    <Layout pageTitle="Cadastros">
    <FormProducts />
    <FormLogin />
    </Layout>
  )
}

export const Head = () => <Seo title="Cadastros" />

export default PostForms
