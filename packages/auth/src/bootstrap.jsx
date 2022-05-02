import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

const mount = (el, { mountPath, onNavigate, onSignin, defaultHistory }) => {

  const history = defaultHistory || createMemoryHistory({
    initialEntries: [mountPath]
  })

  onNavigate && history.listen(onNavigate)

  ReactDOM.render(<App history={history} onSignin={onSignin} />, el)

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location
      pathname !== nextPathname && history.push(nextPathname)
    }
  }
}

const standaloneMarketingElement = document.querySelector('#standalone-auth-root')
const isStandAloneMode = standaloneMarketingElement && process.env.NODE_ENV === 'development'

if (isStandAloneMode) {
  console.info(' ========== Runnig in Standalone mode!!! ========== ')
  mount(standaloneMarketingElement, { defaultHistory: createBrowserHistory() })
}

export { mount }
