import React from 'react'

import { useMicrofrontend } from '../hooks/useMicrofrontend'
import { mount } from 'auth/AuthApp'

const AuthApp = ({ onSignin }) => {

  const handleSignin = React.useCallback(() => {
    onSignin()
  }, [])

  const mfElementRoot = useMicrofrontend(mount, { onSignin: handleSignin })
  return <div ref={mfElementRoot}/>
}

export default AuthApp