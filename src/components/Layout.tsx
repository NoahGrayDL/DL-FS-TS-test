import React from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Header from "./Header"

interface LayoutProps {
  screenTitle: string
}

const Layout: React.FC<LayoutProps> = props => {
  const { children, screenTitle } = props
  return (
    <StyledLayout className="FRL">
      <Sidebar />
      <div className="rightside-screen FCT">
        <Header title="2019 Consolidated Closing Project" />
        <div className="page-container">
          <h3>{screenTitle}</h3>
          {children}
        </div>
      </div>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width: 100%;
  & .rightside-screen {
    width: 100%;
    height: 100vh;
    & .page-container {
      width: calc(100vw - 300px);
      height: 100%;
      min-height: calc(100vh - 48px);
      padding: 8px 0 8px 8px;
    }
  }
`

export default Layout
