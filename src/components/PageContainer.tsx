import React from "react"
import styled from "styled-components"
import ReactTable from "react-table"
import "react-table/react-table.css"
import _ from "lodash"
import { makeData } from "../Utils"

interface PageContainerProps {
  title: string
}

const data = makeData(10)

const PageContainer: React.FC<PageContainerProps> = props => {
  const { title } = props
  return (
    <StyledPageContainer className="FCT">
      PageContainer! title: {title}
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                  aggregate: vals => _.round(_.mean(vals)),
                  Aggregated: row => {
                    return <span>{row.value} (avg)</span>
                  }
                },
                {
                  Header: "Visits",
                  accessor: "visits",
                  aggregate: vals => _.sum(vals)
                }
              ]
            }
          ]}
          pivotBy={["firstName", "lastName"]}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <em>Sub Component!</em>
              </div>
            )
          }}
        />
      </div>
    </StyledPageContainer>
  )
}

const StyledPageContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export default PageContainer
