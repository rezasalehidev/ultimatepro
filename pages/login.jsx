import React from 'react'
import { css } from '@emotion/css'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import { Button, InputEmail, InputPassword } from '../components/index'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <LayoutAuth>
      <Head>
        <title>صفحه ورود</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <form
        onSubmit={handleSubmit}
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <InputEmail placeholder="ایمیل" />
        <InputPassword placeholder="رمز عبور" />
        <Button type="submit">ارسال</Button>
      </form>
    </LayoutAuth>
  )
}

export default Login
