import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

interface EntriesProps {}

const Entries: React.FC<EntriesProps> = props => {
  return (
    <Layout screenTitle="Company Overview">
      <StyledEntries>Entries</StyledEntries>
    </Layout>
  )
}

const StyledEntries = styled.div`
  color: pink;
  font-size: 4rem;
`

export default Entries
