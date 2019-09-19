import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

interface ChartOfAccountProps {}

const ChartOfAccount: React.FC<ChartOfAccountProps> = props => {
  return (
    <Layout screenTitle="Chart of Account">
      <StyledChartOfAccount>ChartOfAccount!</StyledChartOfAccount>
    </Layout>
  )
}

const StyledChartOfAccount = styled.div`
  color: green;
  font-size: 4rem;
`

export default ChartOfAccount
