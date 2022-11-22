import * as React from 'react'
import styled from 'styled-components'
const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 400px;
  flex-wrap: wrap;
`
const Label = styled.label`
  width: 80px;
  margin: 5px;
`
const InputNames = styled.input`
  width: 250px;
  margin: 5px;
`
const FormLogin = () => {
  return(<Form>
	<Label>Username:</Label> <InputNames type="text" name="username" />
	<Label>Senha:</Label> <InputNames type="password" name="password" />
	<button type="submit">Entrar</button>
	  </Form>
	)
}

export default FormLogin
