import * as React from 'react'
import styled from 'styled-components'

const Bloq = styled.form`
  display: flex;
  flex-direction: row;
  width: 400px;
  flex-wrap: wrap;
`
const Label = styled.label`
  width: 100px;
  margin: 5px;
`
const InputNames = styled.input`
  width: 250px;
  margin: 5px;
`

const FormProducts = () => {
  return(<Bloq>
    <Label> Título:</Label> <InputNames type="text" name="title" />
  	<Label>Código:</Label> <InputNames type="text" name="codigo" />
<Label>Descrição:</Label> <InputNames type="text" name="descricao" />
  	<Label>Preço:</Label> <InputNames type="text" name="preco" />
  	<Label>Lançamento:</Label> <InputNames type="text" name="lancamento" />
    <button type="submit">Cadastrar</button>
	  </Bloq>
  )
}

export default FormProducts
