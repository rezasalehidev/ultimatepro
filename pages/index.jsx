import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const color = 'white'

function HomePage() {
  const theme = useTheme()

  return (
    <>
      <div className="main">Index Page</div>
      <div
        className={css`
          padding: 27px;
          background-color: ${theme.colors.primary};
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
