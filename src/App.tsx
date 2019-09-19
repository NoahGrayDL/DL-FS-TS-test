import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import {
  CompanyOverview,
  ChartOfAccount,
  Entries,
  TrialBalance,
  Leadsheet,
  FinancialStatements,
  Report
} from "./pages"

import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/company-overview" component={CompanyOverview} />
        <Route path="/chart-of-account" component={ChartOfAccount} />
        <Route path="/entries" component={Entries} />
        <Route path="/trial-balance" component={TrialBalance} />
        <Route path="/leadsheet" component={Leadsheet} />
        <Route path="/financial-statements" component={FinancialStatements} />
        <Route path="/report" component={Report} />
      </div>
    </Router>
  )
}

export default App
