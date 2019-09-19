import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import LeadsheetTable from "./LeadsheetTable"

interface LeadsheetProps {}

const Leadsheet: React.FC<LeadsheetProps> = props => {
  return (
    <Layout screenTitle="Leadsheet">
      <StyledLeadsheet>
        <LeadsheetTable />
      </StyledLeadsheet>
    </Layout>
  )
}

const StyledLeadsheet = styled.div``

export default Leadsheet
