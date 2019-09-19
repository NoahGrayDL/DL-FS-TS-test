import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <StyledSidebar className="FCT">
      <div className="org-title FRL">사성전자</div>
      <div className="menu-container">
        <Menu title="Home" moveTo="/" />
        <Menu title="Financial Statements" moveTo="/financial-statements" />
        <Menu title="Trial Balance" moveTo="/trial-balance" />
        <Menu title="Report" moveTo="/report" />
      </div>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f2f2f2;
  & .org-title {
    width: 100%;
    font-weight: bold;
    font-size: 1.4rem;
  }
  & .menu-container {
    margin-top: 1rem;
    width: 100%;
  }
`

interface MenuProps {
  title: string
  moveTo: string
}

const Menu: React.FC<MenuProps> = props => {
  const { title, moveTo } = props
  return (
    <StyledMenu className="FCT">
      <NavLink exact className="nav" activeClassName="currentNav" to={moveTo}>
        Menu! {title}
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

export default Sidebar
