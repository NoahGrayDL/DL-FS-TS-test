import React from "react"
import styled from "styled-components"
import Menu from "./Menu"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <StyledSidebar className="FCT">
      <div className="org-title FRL">(ACL)사성전자(주)</div>
      <div className="menu-container">
        <Menu title="Company Overview" moveTo="/company-overview" />
        <Menu title="Chart Of Account" moveTo="/chart-of-account" />
        <Menu title="Entries" moveTo="/entries" />
        <Menu title="Trial Balance" moveTo="/trial-balance" />
        <Menu title="Leadsheet" moveTo="/leadsheet" />
        <Menu title="Financial Statements" moveTo="/financial-statements" />
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
    height: 48px;
    font-weight: bold;
    font-size: 1.4rem;
    padding-left: 8px;
  }
  & .menu-container {
    margin-top: 1rem;
    width: 100%;
  }
`

export default Sidebar
