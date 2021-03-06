import React from 'react'

import { useMicrofrontend } from '../hooks/useMicrofrontend'
import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const mfElementRoot = useMicrofrontend(mount)
  return <div ref={mfElementRoot}/>
}

export default MarketingApp