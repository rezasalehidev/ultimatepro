import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

function index({ type = 'button', children, variant }) {
  const theme = useTheme()
  return (
    <button
      type={type}
      className={css`
        background-color: ${variant === "primary" ? "red" :"blue"};
        height: 50px;
        border: 1px solid #ddd;
        margin-top: 5px;
        cursor: pointer;
        &:hover {
          background-color: #ddd;
        }
      `}
    >
      {children}
    </button>
  )
}

export default index
