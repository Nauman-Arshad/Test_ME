import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"

export default function Home() {
  return ( 
  <Layout>
    <h1>Hello Guys</h1>
    <h2>I am Akif and I am a full-stack-developer in making.</h2>
    <p>Want to hire me soon? <Link to="/contact">Contact me here.</Link> </p>
  </Layout>
  )
}
