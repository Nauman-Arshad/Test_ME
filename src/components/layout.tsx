import React from 'react'
import Header from "./header"
import Footer from "./footer"

function Layout( {children}: any ) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  ) 
}

export default Layout
