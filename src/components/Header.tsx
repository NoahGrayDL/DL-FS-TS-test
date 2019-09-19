import React from "react"
import styled from "styled-components"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = props => {
  const { title } = props
  return <StyledHeader className="FRL">Project: {title}</StyledHeader>
}

const StyledHeader = styled.div`
  background: lightgray;
  height: 48px;
  width: 100%;
  padding-left: 1rem;
`

export default Header
