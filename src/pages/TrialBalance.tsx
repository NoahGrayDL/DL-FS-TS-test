import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import TableExample from "../components/TableExample"

interface TrialBalanceProps {}

const TrialBalance: React.FC<TrialBalanceProps> = props => {
  return (
    <Layout>
      <StyledTrialBalance>
        TrialBalance!
        <TableExample />
      </StyledTrialBalance>
    </Layout>
  )
}

const StyledTrialBalance = styled.div``

export default TrialBalance
