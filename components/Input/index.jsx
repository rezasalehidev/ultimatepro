import React from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'

function index({ type, placeholder }) {
  const theme = useTheme()
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={css`
        border: 1px solid ${theme.colors.gray};
        height: 30px;
        /* margin-bottom: 5px;
        margin-top: 5px; */
        border-radius: 5px;
        padding-left: 10px;
        box-shadow: ${theme.boxShadow};
        direction: ltr;
        background-color: ${theme.colors.backgroundColorPrimary};
      `}
    />
  )
}

export default index
