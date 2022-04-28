import React from 'react'
import { useHistory } from 'react-router-dom'

export const useMicrofrontend = (mount) => {
  
  const history = useHistory()
  const mfElementRoot = React.useRef(null)

  React.useEffect(() => {
    const { pathname: currentPathName } = history.location

    const { onParentNavigate } = mount(mfElementRoot.current, {
      mountPath: currentPathName,
      onNavigate: ({ pathname: nextPathName }) => {
        currentPathName !== nextPathName && history.push(nextPathName)
      }
    })
    history.listen(onParentNavigate)
  }, [])

  return mfElementRoot

}
