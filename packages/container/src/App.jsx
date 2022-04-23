import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header, MarketingApp } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  )
}

export default App