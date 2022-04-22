import React from 'react'
import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {

  const elRef = React.useRef(null)

  React.useEffect(() => {
    mount(elRef.current)
  }, [])

  return <div ref={elRef}/>
}

export default MarketingApp