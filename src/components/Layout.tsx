import React from "react"
import styled from "styled-components"
import Workspace from "./Workspace"
import Sidebar from "./Sidebar"

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = props => {
  return (
    <StyledLayout className="FRL">
      <Sidebar />
      <Workspace />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width: 100%;
`

export default Layout
