import React from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {

  const elRef = React.useRef(null)
  const history = useHistory()

  React.useEffect(() => {
    const { onParentNavigate } = mount(elRef.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname: currentPathName } = history.location
        currentPathName !== nextPathName && history.push(nextPathName)
      }
    })
    history.listen(onParentNavigate)    
  }, [])

  return <div ref={elRef}/>
}

export default MarketingApp