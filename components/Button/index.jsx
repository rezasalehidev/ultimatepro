import React from 'react'

function index({ type = 'button', children }) {
  return (
    <button
      type={type}
    >
      {children}
    </button>
  )
}

export default index
