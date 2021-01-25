import React from "react"
import { Helmet } from "react-helmet"

export default function HomePage() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>GatsbyPWA</title>
          <link rel="canonical" href="https://testcurrent.netlify.app" />
        </Helmet>
      <h1>Hello World</h1>
    </div>
  )
}
