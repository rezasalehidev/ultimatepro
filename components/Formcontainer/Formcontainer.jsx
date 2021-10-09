import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'


const  Formcontainer = ({children})=> {
  const theme = useTheme()
  return (
    <div
      className={css`
        margin-top: ${theme.spaces[2]};
        margin-bottom: ${theme.spaces[2]};
      `}
    >
      {children}
    </div>
  )
}

export default Formcontainer
