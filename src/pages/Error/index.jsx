//internal e external libs
import React from 'react'
import { Link } from 'react-router-dom'
/* Custom font*/
import '@fontsource/playfair-display'

/* Bootstap Style */
import 'bootstrap/dist/css/bootstrap.css'

//internal styles
import { Content, Page } from './style'

//Begin Component

const Error404 = () => {
  return (
    <Content>
      <Page>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Looks like there was no beach today</p>
        <Link to="/">back to home</Link>
      </Page>
    </Content>
  )
}

export default Error404
