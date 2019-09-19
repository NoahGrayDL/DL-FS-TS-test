import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

interface CompanyOverviewProps {}

const CompanyOverview: React.FC<CompanyOverviewProps> = props => {
  return (
    <Layout screenTitle="Company Overview">
      <StyledCompanyOverview>Company Overview!</StyledCompanyOverview>
    </Layout>
  )
}

const StyledCompanyOverview = styled.div`
  color: pink;
  font-size: 4rem;
`

export default CompanyOverview
