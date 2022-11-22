import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavLinkItem = styled.li`
  padding-right: 2rem;
  color: black;
`
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const Navigation = () => {
  return(<nav>
            <NavLinks>
              <NavLinkItem>
                <Link to="/">
                  Home
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/about">
                  About
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/products">
                  Produtos
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/my-forms">
                  Cadastros
                </Link>
              </NavLinkItem>
            </NavLinks>
          </nav>
  )
}
export default Navigation
