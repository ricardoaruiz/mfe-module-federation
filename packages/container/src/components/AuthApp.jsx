import React from 'react'

import { useMicrofrontend } from '../hooks/useMicrofrontend'
import { mount } from 'auth/AuthApp'

const AuthApp = () => {
  const mfElementRoot = useMicrofrontend(mount)
  return <div ref={mfElementRoot}/>
}

export default AuthApp