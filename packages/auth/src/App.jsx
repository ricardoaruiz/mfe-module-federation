import React from 'react'
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Signin, Signup } from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

const App = ({ history, onSignin }) => {
  
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <Signin onSignin={onSignin}/>
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignin={onSignin} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  )
}

export default App
