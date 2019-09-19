import React from "react"
import Layout from "./components/Layout"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { FinancialStatements, TrialBalance, Report } from "./pages"

import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Layout} />
        <Route path="/financial-statements" component={FinancialStatements} />
        <Route path="/trial-balance" component={TrialBalance} />
        <Route path="/report" component={Report} />
      </div>
    </Router>
  )
}

export default App
