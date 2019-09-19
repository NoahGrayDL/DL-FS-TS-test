import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

interface MenuProps {
  title: string
  moveTo: string
}

const Menu: React.FC<MenuProps> = props => {
  const { title, moveTo } = props
  return (
    <StyledMenu className="FCT">
      <NavLink
        exact
        className="nav FRL"
        activeClassName="currentNav"
        to={moveTo}
      >
        {title}
      </NavLink>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  width: 100%;
  & .nav {
    width: 100%;
    height: 48px;
    padding: 8px;
    transition: 0.4s;
    &:hover {
      background-color: skyblue;
    }
  }
  & .currentNav {
    background-color: #ccc;
  }
`

export default Menu
