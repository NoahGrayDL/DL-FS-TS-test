import React from "react"
import styled from "styled-components"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <StyledSidebar className="FCT">
      <div className="org-title FRL">사성전자</div>
      <div className="menu-container">
        <Menu title="Financial Statements" />
        <Menu title="Report" />
      </div>
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: gray;
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
}

const Menu: React.FC<MenuProps> = props => {
  const { title } = props
  return <StyledMenu>Menu! {title}</StyledMenu>
}

const StyledMenu = styled.div`
  width: 100%;
  height: 48px;
  padding: 8px;
  &:hover {
    background-color: darkgray;
  }
`

export default Sidebar
