import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const mount = (el) => {
  ReactDOM.render(<App />, el)
}

const standaloneMarketingElement = document.querySelector('#standalone-marketing-root')
const isStandAloneMode = standaloneMarketingElement && process.env.NODE_ENV === 'development'

if (isStandAloneMode) {
  console.info(' ========== Runnig in Standalone mode!!! ========== ')
  mount(standaloneMarketingElement)
}

export { mount }
