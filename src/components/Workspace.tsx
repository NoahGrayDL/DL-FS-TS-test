import React from "react"
import styled from "styled-components"
import Header from "./Header"
import PageContainer from "./PageContainer"

interface WorkspaceProps {}

const Workspace: React.FC<WorkspaceProps> = props => {
  return (
    <StyledWorkspace className="FCT">
      <Header title="Header is here" />
      <PageContainer title="page container" />
    </StyledWorkspace>
  )
}

const StyledWorkspace = styled.div`
  width: 100%;
  height: 100vh;
`

export default Workspace
