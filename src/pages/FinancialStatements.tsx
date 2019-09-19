import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

import TableExample from "../components/TableExample"

interface FinancialStatementsProps {}

const FinancialStatements: React.FC<FinancialStatementsProps> = props => {
  return (
    <Layout screenTitle="Financial Statements">
      <StyledFinancialStatements>
        FinancialStatements!
      </StyledFinancialStatements>
    </Layout>
  )
}

const StyledFinancialStatements = styled.div`
  color: green;
  font-size: 4rem;
`

export default FinancialStatements
