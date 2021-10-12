import React from 'react'
import Input from './index'
import { ThemeProvider } from '@emotion/react'
import theme from '../../configs/theme'

export default { title: 'Input' }

export const InputStory = () => (
  <ThemeProvider theme={theme}>
    <Input type="email" placeholder="لطفا ایمیل خود را وارد نمائید">
      Email
    </Input>
  </ThemeProvider>
)
