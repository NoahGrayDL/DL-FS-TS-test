import React from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Header from "./Header"

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = props => {
  const { children } = props
  return (
    <StyledLayout className="FRL">
      <Sidebar />
      <div className="rightside-screen FCT">
        <Header title="Header is here" />
        <div className="page-container">{children}</div>
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
      width: 100%;
      height: 100%;
      min-height: 100vh;
    }
  }
`

export default Layout
