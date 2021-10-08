import React from 'react'
import { css } from '@emotion/css'

const color = 'white'

function HomePage() {
  return (
    <>
      <div className="main">Index Page</div>
      <div
        className={css`
          padding: 27px;
          background-color: pink;
          font-size: 24px;
          border-radius: 4px;
          margin-top: 5px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
    </>
  )
}

export default HomePage
