import React from "react"
import styled from "styled-components"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = props => {
  const { title } = props
  return <StyledHeader>Header! title: {title}</StyledHeader>
}

const StyledHeader = styled.div`
  background: lightgray;
  height: 2rem;
  width: 100%;
`

export default Header
