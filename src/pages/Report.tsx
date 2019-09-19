import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import TableExample from "../components/TableExample"

interface ReportProps {}

const Report: React.FC<ReportProps> = props => {
  return (
    <Layout screenTitle="Report">
      <StyledReport>Report!</StyledReport>
    </Layout>
  )
}

const StyledReport = styled.div`
  color: orange;
  font-size: 4rem;
`

export default Report
