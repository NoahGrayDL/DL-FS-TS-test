import React from "react"
import styled from "styled-components"
import ReactTable from "react-table"
import "react-table/react-table.css"
import _ from "lodash"

interface LeadsheetTableProps {}

const data = [
  {
    caption: "Caption A",
    accountCode: "A-1",
    accountDesc: "This is account",
    beforeDebit: 1111,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 1234,
    afterCredit: 10
  },
  {
    caption: "Caption A",
    accountCode: "A-2",
    accountDesc: "This is account",
    beforeDebit: 2222,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 1234,
    afterCredit: 10
  },
  {
    caption: "Caption A",
    accountCode: "A-3",
    accountDesc: "This is account",
    beforeDebit: 3333,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 124,
    afterCredit: 10
  },
  {
    caption: "Caption A",
    accountCode: "A-4",
    accountDesc: "This is account",
    beforeDebit: 0,
    beforeCredit: 124400,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 68,
    afterCredit: 10
  },
  {
    caption: "Caption B",
    accountCode: "B-1",
    accountDesc: "This is account",
    beforeDebit: 5555,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 3,
    afterCredit: 10
  },
  {
    caption: "Caption B",
    accountCode: "B-2",
    accountDesc: "This is account",
    beforeDebit: 3242,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 1909,
    afterCredit: 10
  },
  {
    caption: "Caption C",
    accountCode: "C-1",
    accountDesc: "This is account",
    beforeDebit: 1234,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 687,
    afterDebit: 32,
    afterCredit: 10
  },
  {
    caption: "Caption C",
    accountCode: "C-2",
    accountDesc: "This is account",
    beforeDebit: 342,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 1111,
    afterCredit: 10
  },
  {
    caption: "Caption C",
    accountCode: "C-3",
    accountDesc: "This is account",
    beforeDebit: 6666,
    beforeCredit: 0,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 92,
    afterCredit: 10
  },
  {
    caption: "Caption C",
    accountCode: "C-4",
    accountDesc: "This is account",
    beforeDebit: 0,
    beforeCredit: 970,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 432,
    afterCredit: 10
  },
  {
    caption: "Caption C",
    accountCode: "C-5",
    accountDesc: "This is account",
    beforeDebit: 0,
    beforeCredit: 5678,
    ajeDebit: 10,
    ajeCredit: 123,
    afterDebit: 56,
    afterCredit: 10
  }
]

const columns = [
  {
    Header: "Caption",
    columns: [
      {
        Header: "Caption",
        accessor: "caption"
      },
      {
        Header: "Account",
        // accessor: "accountCode"
        id: "accountCode",
        accessor: (d: { accountCode: string }) => d.accountCode
      }
      // {
      //   Header: "Account Description",
      //   id: "accountDesc",
      //   accessor: (d: { accountDesc: any }) => d.accountDesc
      // }
    ]
  },
  {
    Header: "Before TB",
    columns: [
      {
        Header: "Debit",
        accessor: "beforeDebit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      },
      {
        Header: "Credit",
        accessor: "beforeCredit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      }
    ]
  },
  {
    Header: "AJE",
    columns: [
      {
        Header: "Debit",
        accessor: "ajeDebit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      },
      {
        Header: "Credit",
        accessor: "ajeCredit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      }
    ]
  },
  {
    Header: "After TB",
    columns: [
      {
        Header: "Debit",
        accessor: "afterDebit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      },
      {
        Header: "Credit",
        accessor: "afterCredit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      }
    ]
  },
  {
    Header: "Subsidiary 1",
    columns: [
      {
        Header: "Debit",
        accessor: "afterDebit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      },
      {
        Header: "Credit",
        accessor: "afterCredit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      }
    ]
  },
  {
    Header: "Subsidiary 2",
    columns: [
      {
        Header: "Debit",
        accessor: "afterDebit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      },
      {
        Header: "Credit",
        accessor: "afterCredit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      }
    ]
  },
  {
    Header: "Combined TB",
    columns: [
      {
        Header: "Debit",
        accessor: "afterDebit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      },
      {
        Header: "Credit",
        accessor: "afterCredit",
        aggregate: (vals: BigInteger) => _.sum(vals)
      }
    ]
  }
]

const LeadsheetTable: React.FC<LeadsheetTableProps> = props => {
  return (
    <ReactTable
      data={data}
      columns={columns}
      pivotBy={["caption"]}
      className="-striped -hightlight"
    />
  )
}

const StyledLeadsheetTable = styled.div`
  width: 100%;
  overflow-x: scroll;
`

export default LeadsheetTable
