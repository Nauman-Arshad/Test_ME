import React from 'react'
import Header from "./header"
import Footer from "./footer"
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

function Layout( {children}: any ) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
      {children}
      </div>
      <Footer />
    </div>
  ) 
}

export default Layout
 