import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Landing, Pricing } from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Landing} />

            <Route path='/pricing' exact component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
