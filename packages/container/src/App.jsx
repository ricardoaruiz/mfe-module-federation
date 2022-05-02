import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Header, AuthApp, MarketingApp } from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  
  const [isSignedIn, setIsSignedIn] = React.useState(false)

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
        <Switch>
          <Route path="/auth">
            <AuthApp onSignin={() => setIsSignedIn(true)}/>
          </Route>
          <Route path="/" component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App