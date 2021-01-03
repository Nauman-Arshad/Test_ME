import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About Us</Link>
        </li>
        <li>
        <Link to="/blog">Our Blogs</Link>
        </li>
        <li>
        <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  )
}
