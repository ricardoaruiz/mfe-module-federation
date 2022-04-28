import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Header, AuthApp, MarketingApp } from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App