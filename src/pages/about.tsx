import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <h2>This page will tell a little about me.</h2>
      <p>
        Want to know more about me? <Link to="/contact">Check my GitHub</Link>
      </p>
    </Layout>
  )
}
