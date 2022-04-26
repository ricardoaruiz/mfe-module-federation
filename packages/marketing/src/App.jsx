import React from 'react'
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Landing, Pricing } from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/pricing' component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
