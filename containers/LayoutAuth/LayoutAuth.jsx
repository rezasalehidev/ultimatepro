import React from 'react'
import { css } from '@emotion/css'

const LayoutAuth = ({ children }) => (
  <div
    className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 80vh;
    `}
  >
    <img
      src="logo.png"
      alt="logo"
      className={css`
        width: 150px;
      `}
    />
    <h1>ورود کاربر</h1>
    <div>{children}</div>
  </div>
)

export default LayoutAuth
